import { createSignal, Show } from "solid-js";
import MaxImg from "../max.jpg";

function Home() {
  const [searchValue, setSearchValue] = createSignal<string>("");
  return (
    <div>
      <main class="[&>p]:mb-5 [&>p]:font-serif prose text-gray-800-50">
        <h1 class="text-3xl text-gray-900">Welcome to Managing Maximilian</h1>

        <div>
          <h2 class="text-xl text-gray-900">Search everything...</h2>
          <input
            type="text"
            class="w-full grow outline-0 border p-3 text-lg rounded-md"
            placeholder="Search..."
            value={searchValue()}
            onInput={(e) => setSearchValue(e.currentTarget.value)}
          />
          <Show when={searchValue().length > 0}>
            <div class="text-red-500 text-sm">
              Searching for "{searchValue()}" but search is not implemented
              yet...
            </div>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default Home;
