import {
  createEffect,
  createMemo,
  createSignal,
  Errored,
  For,
  onCleanup,
  onSettled,
  Show,
} from "solid-js";
import { getFactoid } from "../test_data_loaders/factoid";
import { Loading } from "solid-js";
import {
  groupStatementsByYear,
  linkifyUrls,
  removeBrackets,
} from "../utils/utils";
import { Title } from "@solidjs/meta";
import { Statement } from "../components/statement";

import {
  modelDefs,
  StatementTypes,
  TPerson,
  type TFactoid,
} from "../modelDefs";
import { getPerson } from "../test_data_loaders/person";
import VerticalRangeSlider, {
  RangeValue,
} from "../components/VerticalRangeSlider";
import VerticalSlider from "../components/VerticalSlider";
import VerticalTimeline from "../components/VerticalTimeline";
import { paths } from "../router";

type PersonProps = {
  params: {
    id: string;
  };
};

type StatementPanelProps = {
  statement: StatementTypes;
  thisObjectId: number;
};

const StatementPanel = (props: StatementPanelProps) => {
  const [expanded, setExpanded] = createSignal<boolean>(false);
  return (
    <>
      <div class="ml-3 bg-green-500 text-xs font-semibold uppercase rounded-t text-white w-fit px-2 py-1">
        {modelDefs[props.statement.type as keyof typeof modelDefs].verboseName}
      </div>
      <div class="bg-slate-100">
        <div
          class=" font-serif text-slate-800 p-2 rounded-xs transition-all flex justify-between hover:text-slate-600 cursor-pointer"
          onClick={() => setExpanded(!expanded())}
        >
          {removeBrackets(props.statement.label)}
        </div>
        <div>
          <div class="font-sans">
            <Show when={expanded()}>
              <Errored
                fallback={
                  <>
                    Something went wrong! Probably malformed data in the current
                    stage!!
                  </>
                }
              >
                <Statement
                  statement={props.statement}
                  noTypeChip={true}
                  thisObjectId={props.thisObjectId}
                />
              </Errored>
            </Show>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Person(props: PersonProps) {
  const person = createMemo<TPerson>(() => getPerson(props.params.id));
  const statementsByYear = createMemo(() =>
    groupStatementsByYear(person().statements),
  );
  const [timelinePosition, setTimelinePosition] = createSignal<number>(1480);

  const timelineStartDate = createMemo(() => Object.keys(statementsByYear()).filter((y) => y !== "unknown")
    .map(Number)
    .sort((a, b) => a - b).at(0));

  const timelineEndDate = createMemo(() => Object.keys(statementsByYear()).filter((y) => y !== "unknown")
    .map(Number)
    .sort((a, b) => a - b).at(-1));



  const updateTimelinePosition = (position: number) => {
    setTimelinePosition(position);

    document.getElementById(`year-${position}`)?.scrollIntoView();
  };

  createEffect(() => statementsByYear(), console.log);



  let observer!: IntersectionObserver;
  onSettled(() => {
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const item = parseInt((entry.target as HTMLElement).dataset.item as string);

          if (item in statementsByYear() && item !== timelinePosition()) {
            setTimelinePosition(item);
          }

        }
      }
    });
    return () => observer.disconnect();
  });



  return (
    <Errored
      fallback={(error, reset) => (
        <div>Something went wrong rendering this data {error()}</div>
      )}
    >
      <Loading
        fallback={
          <div>
            <span class="loader" />
          </div>
        }
      >
        <Title>{person().label}</Title>
        <div class="mb-20">
          <h1 class="prose font-serif text-2xl">
            {person().label.substring(0, person().label.length - 1)}
          </h1>

          <div><a href={paths.egonet(props.params.id, {selectedNode: props.params.id})}>View Egonet</a></div>
          <div class="grid grid-cols-12">
            <div class="grid grid-cols-12 gap-y-10 mt-16 col-span-11">
              <For each={Object.entries(statementsByYear())}>
                {([year, yearStatements]) => (
                  <>
                    <div
                      class="col-span-12 border-b mt-10 border-slate-400 text-slate-400 text-xs font-semibold scroll-mt-2"
                      id={`year-${year}`}
                      data-item={year}
                      ref={(element) => {
                        observer.observe(element);

                        onCleanup(() => {
                          observer.unobserve(element);
                        });
                      }}
                    >
                      {year}
                    </div>
                    <For each={yearStatements}>
                      {(statement_key_value) => (
                        <For each={Object.entries(statement_key_value)}>
                          {([fieldName, statement]) => (
                            <>
                              <div class="col-span-2 uppercase font-semibold text-sm flex flex-col justify-center">
                                <div>{fieldName.replaceAll("_", " ")}</div>
                                <Show when={statement.start_date_written}>
                                  <div>({statement.start_date_written})</div>
                                </Show>
                              </div>
                              <div class="col-span-10 flex flex-col justify-center">
                                <StatementPanel
                                  statement={statement}
                                  thisObjectId={person().id}
                                />
                              </div>
                            </>
                          )}
                        </For>
                      )}
                    </For>
                  </>
                )}
              </For>
            </div>
            <div class="col-span-1 relative">
              <div class="fixed  top-24 bottom-12">
                <Show when={timelineStartDate() && timelineEndDate()}>
                <VerticalTimeline
                  startYear={timelineStartDate()}
                  endYear={timelineEndDate()}
                  value={timelinePosition()}
                  onChange={updateTimelinePosition}
                  items={statementsByYear()}
                  />
                </Show>
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </Errored>
  );
}
