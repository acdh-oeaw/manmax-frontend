import { createSignal, Show } from "solid-js";
import MaxImg from "../max.jpg";

function Home() {
  const [searchValue, setSearchValue] = createSignal<string>("");
  return (
    <div>
      <main class="[&>p]:mb-5 [&>p]:font-serif prose text-gray-800-50">
        <h1 class="text-3xl text-gray-900">Welcome to Managing Maximilian</h1>
        <h2 class="text-xl text-red-600">
          This Research Interface for the ManMax dataset is currently under
          construction. This is a preliminary demo, showing Factoids and
          Persons. A more complete set of features will follow.
        </h2>
        <div>
          <h2 class="text-xl text-gray-900">Search everything...</h2>
          <input
            type="text"
            class="w-full grow outline-0 bg-blue-500 text-white p-3 text-lg rounded-sm"
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
