import { createMemo, flush, For, isPending, onSettled, Show } from "solid-js";
import { getFactoid, getFactoidList } from "../test_data_loaders/factoid";
import { Loading } from "solid-js";
import { paths } from "../router";
import { removeBrackets } from "../utils/utils";
import { Title } from "@solidjs/meta";
import { useSearchParams } from "@solidjs/router";
import { getPersonList } from "../test_data_loaders/person";

type PersonProps = {};

export default function PersonList(props: PersonProps) {
  let inputRef!: HTMLInputElement;
  const [search, setSearch] = useSearchParams();
  const data = createMemo(() => getPersonList(search.q as string));
  const personList = createMemo(() => data()["items"])
  const count = createMemo(() => data()["count"])

  onSettled(() => {
    if (search.q) {
      inputRef.value = search.q as string;
    }
  })

  return (
    <>
      <Title>Persons | ManMax</Title>
      <h1 class="text-2xl font-sans  font-semibold mb-20 inline mr-2">
        Persons</h1>

      <div class="mb-12   p-3 rounded-sm">
        <div class="flex flex-col justify-center items-center grow">
          <input
            type="text"
            placeholder="Search Persons..."
            class="h-10 bg-blue-500 text-white rounded-xs p-4 w-96 focus:outline-0"
            onInput={(e) => { setSearch({ q: e.target.value }) }}

            ref={inputRef}
          ></input> <span class={["mt-2 text-xs font-semibold", {"text-red-600": count() === 0}]}>{ count()} results</span>
          <Loading><Show when={isPending(personList)}><div><span class="loader" /></div></Show></Loading>
        </div>

      </div>

      <Loading fallback={<div><span class="loader"/></div>}>
        <div class={["flex flex-col gap-y-4", {"opacity-55 pointer-events-none": isPending(personList)}]}>
          <For each={personList()}>
            {(person) => (
              <a
                href={paths.person(person.id)}
                class="bg-blue-800 hover:bg-blue-700 rounded-xs flex items-center p-3 text-sm text-white font-serif"
                textContent={person.label.substring(0, person.label.length -1)}
              />
            )}
          </For>
        </div>
      </Loading>
    </>
  );
}
