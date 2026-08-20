import { createMemo, flush, For, isPending, onSettled, Show } from "solid-js";
import { getFactoid, getFactoidList } from "../test_data_loaders/factoid";
import { Loading } from "solid-js";
import { paths } from "../router";
import { removeBrackets } from "../utils/utils";
import { Title } from "@solidjs/meta";
import { useSearchParams } from "@solidjs/router";

type FactoidProps = {};

export default function FactoidList(props: FactoidProps) {
  let inputRef!: HTMLInputElement;
  const [search, setSearch] = useSearchParams();
  const factoidList = createMemo(() => getFactoidList(search.q as string));

  onSettled(() => {
    if (search.q) {
      inputRef.value = search.q as string;
    }
  })

  return (
    <>
      <Title>Factoids | ManMax</Title>

      <aside class="mb-12 font-sans text-gray-800 prose bg-gray-100 p-3 rounded-sm">
        <h1 class="text-2xl font-sans  font-semibold mb-8 inline mr-2">
          Faktoide</h1> bilden die Grundlage des Datenmodells von Mananging Maximilian. Jedes Faktoid repräsentiert die Interpretation eines Abschnitts eines Quellenmaterials. Es kann beliebig viele Aussagen enthalten, die den Inhalt formal darstellen.
      </aside>
      <div class="mb-12  bg-gray-100 p-3 rounded-sm">
        <div class="flex justify-center items-center grow">
          <input
            type="text"
            placeholder="Search Factoids..."
            class="h-10 border rounded-md"
            onInput={(e) => { setSearch({ q: e.target.value }) }}

            ref={inputRef}
          ></input> <Loading><Show when={isPending(factoidList)}><span class="spinner"/></Show></Loading>
        </div>
        <Show when={search.q}>
          <div class="flex justify-center grow mt-2 text-red-700">No searching yet; dummy backend!</div>
        </Show>
      </div>

      <Loading fallback={<div><span class="loader"/></div>}>
        <div class={["flex flex-col gap-y-4", {"opacity-55 pointer-events-none": isPending(factoidList)}]}>
          <For each={factoidList()}>
            {(factoid) => (
              <a
                href={paths.factoid(factoid.id)}
                class="bg-blue-600 hover:bg-blue-700 rounded-xs flex items-center p-2 text-white font-serif"
                textContent={removeBrackets(factoid.label)}
              />
            )}
          </For>
        </div>
      </Loading>
    </>
  );
}
