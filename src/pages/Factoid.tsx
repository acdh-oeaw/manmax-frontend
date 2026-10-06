import { createEffect, createMemo, Errored, For, Show } from "solid-js";
import { getFactoid } from "../test_data_loaders/factoid";
import { Loading } from "solid-js";
import { linkifyUrls, removeBrackets } from "../utils/utils";
import { Title } from "@solidjs/meta";
import { Statement } from "../components/statement";

import { type TFactoid } from "../modelDefs";

type FactoidProps = {
  params: {
    id: string;
  };
};

export default function Factoid(props: FactoidProps) {
  const factoid = createMemo<TFactoid>(() => getFactoid(props.params.id));
  const label = createMemo(() => removeBrackets(factoid().label));


  return (
    <Errored fallback={(error, reset) => <div>{String(error)}</div>}>
      <Loading fallback={<div><span class="loader"/></div>}>
        <Title>{label()}</Title>
        <h1 class="prose font-serif text-2xl">&ldquo;{label()}&rdquo;</h1>
        <div class="flex text-sm mt-4 text-gray-600">
          <div class="mr-3">
            Created by <span class="font-semibold">{factoid().created_by}</span>, {new Date(factoid().created_when).toDateString()}
          </div>
          <div>
            Last updated by <span class="font-semibold">{factoid().modified_by}</span>, {new Date(factoid().modified_when).toDateString()}
          </div>
        </div>
        <div class="mt-12 bg-slate-100 rounded-sm p-4 w-fit relative">
          <div class="absolute -top-6 h-6 bg-amber-600 font-semibold text-xs text-white uppercase py-1 px-2 rounded-t-xs select-none">
            Quelle
          </div>
          <span
            class="font-serif"
            innerHTML={linkifyUrls(factoid().source.text)}
          />{" "}
          <Show when={factoid().source.folio}>
            <span
              class="font-serif"
              textContent={factoid().source.folio}
            ></span>
          </Show>
        </div>

        <div class="border-b border-slate-200 mt-12 mb-16"> </div>
        <div class="mb-40">
          <For each={factoid().has_statements}>
            {(statement) => (
              <Statement statement={statement} topLevel={true}/>
            )}
          </For>
        </div>
      </Loading>
    </Errored>
  );
}
