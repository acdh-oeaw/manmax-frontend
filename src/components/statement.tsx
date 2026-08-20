import { For, Match, Show, Switch } from "solid-js";
import { determineFieldTypeFromValue, removeBrackets } from "../utils/utils";
import { type StatementTypes, modelDefs } from "../modelDefs";

type TStatementProps = {
  statement: StatementTypes;
};

export const Statement = (props: TStatementProps) => {

  return (
    <div class="mt-12 bg-zinc-300 rounded-sm p-4 w-fit relative">
      <div class="absolute shadow-xs shadow-green-500 -top-6 h-6 bg-green-500 font-semibold text-xs text-white uppercase py-1 px-2 rounded-t-xs select-none">
        {modelDefs[props.statement.type].verboseName}
      </div>
      <div class="font-serif prose mb-4">
        {removeBrackets(props.statement.label)}
      </div>
      <div class="grid grid-cols-10 gap-y-4 gap-x-2">
        <For each={Object.entries(props.statement)}>
          {([fieldName, fieldValue]) => (
            <Show
              when={
                fieldValue &&
                fieldName !== "id" &&
                fieldName !== "label" &&
                fieldName !== "type"
              }
            >
              <div class="col-span-2 text-sm uppercase font-semibold flex items-center">
                {fieldName}
              </div>
              <div class="col-span-8 flex items-center">
                <Switch>
                  <Match
                    when={determineFieldTypeFromValue(fieldValue) === "Literal"}
                  >
                    {fieldValue as string}
                  </Match>
                  <Match
                    when={
                      determineFieldTypeFromValue(fieldValue) === "Entities"
                    }
                  >
                    <For each={fieldValue}>
                      {(entity) => (
                        <div class="flex mr-3 cursor-pointer select-none">
                          <div class="bg-blue-500 text-white font-semibold uppercase text-xs px-2 rounded-l-sm flex items-center">
                            {entity.type}
                          </div>
                          <div class="bg-white rounded-r-sm text-sm font-serif text-black py-2 px-3">
                            {removeBrackets(entity.label)}
                          </div>
                        </div>
                      )}
                    </For>
                  </Match>
                  <Match
                    when={
                      determineFieldTypeFromValue(fieldValue) === "Statements"
                    }
                  >
                    <For each={fieldValue}>
                      {(statement) => <Statement statement={statement} />}
                    </For>
                  </Match>
                </Switch>
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  );
};
