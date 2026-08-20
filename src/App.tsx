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
            <div class="flex flex-1">
              <aside class="w-64 shrink-0 flex flex-col shadow-inner  drop-shadow-xs drop-shadow-blue-600">
                <div class="relative w-full h-24  overflow-hidden bg-linear-to-br from-green-800 to-green-900   ">
                  <div class="h-full w-full flex items-center justify-center   text-white relative font-serif">
                    Managing Maximilian
                  </div>

                </div>
                <nav class="relative grow  overflow-hidden bg-linear-to-br from-blue-500 to-blue-400  ">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(255,255,255,0.65),rgba(255,255,255,0)_55%)] mix-blend-soft-light">
                    <div class="h-full w-full flex items-center justify-center uppercase font-semibold text-black">
                      Managing Maximlian
                    </div>
                  </div>
                </nav>
              </aside>
              <main class="flex-1 mb-20">{props.children}</main>
            </div>

            <footer class="bg-gray-100 p-4 text-xs">
              Managing Maximilian Project (conceived in all its glory by Andreas
              Zajic)
            </footer>
          </div>
        </>
      )}
    </Router>
  );
}
