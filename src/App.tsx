import { createSignal } from "solid-js";

import "./App.css";
import { Router } from "./router";
import Header from "./layout/Header";
// The app root: a plain content component — the document shell lives in
// src/Document.tsx. This file is the whole demo; replace its contents to
// start your app.
export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <div class="min-h-screen flex flex-col">


            <Header/>

            <div class="flex flex-1 mt-18">
              <aside class="w-64 shrink-0 p-4 flex">
                <nav class="bg-blue-100 rounded-sm shadow-sm grow backdrop-blur-2xl">Here is list of object types to view list</nav>
              </aside>
              <main class="flex-1 p-4 mb-20" >
                {props.children}
              </main>

            </div>


            <footer class="bg-gray-100 p-4 text-xs">
              Managing Maximilian Project (conceived in all its glory by Andreas Zajic)
            </footer>

          </div>

        </>
      )}
    </Router>
  );
}
