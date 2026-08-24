import { For, Match, Show, Switch } from "solid-js";
import { determineFieldTypeFromValue, removeBrackets } from "../utils/utils";
import { type StatementTypes, modelDefs } from "../modelDefs";

type TStatementProps = {
  statement: StatementTypes;
  topLevel?: boolean;
};

export const Statement = (props: TStatementProps) => {

  return (
    <div class={[" bg-slate-100 rounded-xs p-4 w-fit relative first:mt-8 mt-12", {      "drop-shadow-2xl": !props.topLevel, }]}>

      <div class="absolute shadow-xs  -top-6 h-6 bg-green-600 w-fit font-semibold text-xs text-white uppercase py-1 px-2 rounded-t-xs select-none">
        {modelDefs[props.statement.type].verboseName}
      </div>
      <Show when={props.topLevel}>
      <div class="font-serif prose mb-10">
        {removeBrackets(props.statement.label)}
        </div>
      </Show>
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
                {fieldName.replaceAll("_", " ")}
              </div>

                <Switch>
                  <Match
                    when={determineFieldTypeFromValue(fieldValue) === "Literal"}
                >
                  <div class="col-span-8 flex items-center">
                    {fieldValue as string}
                  </div>
                  </Match>
                  <Match
                    when={
                      determineFieldTypeFromValue(fieldValue) === "Entities"
                    }
                >
                  <div class="col-span-8 flex items-center">
                    <For each={fieldValue}>
                      {(entity) => (
                        <div class=" mr-3 cursor-pointer select-none flex flex-col">
                          <div class="bg-purple-600 text-white font-semibold uppercase text-[10px] px-2 py-0.5 rounded-t-sm flex items-center w-fit ml-2 shadow-xs">
                            {(modelDefs[entity.type as keyof typeof modelDefs]).verboseName}
                          </div>
                          <div class="bg-slate-400 rounded-sm text-sm font-serif text-white py-2 px-3">
                            {removeBrackets(entity.label)}
                          </div>
                        </div>
                      )}
                    </For>
                  </div>
                  </Match>
                  <Match
                    when={
                      determineFieldTypeFromValue(fieldValue) === "Statements"
                    }
                >
                  <div class="col-span-8  justify-center items-left w-full">
                    <For each={fieldValue}>
                      {(statement) => <Statement statement={statement} />}
                    </For>
                  </div>
                  </Match>
                </Switch>

            </Show>
          )}
        </For>
      </div>
    </div>
  );
};
