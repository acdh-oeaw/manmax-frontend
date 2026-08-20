import { createSignal, onSettled } from "solid-js";
import MaxImg from "./max.jpg";
import "./App.css";
import { Router } from "./router";
import Header from "./layout/Header";
// The app root: a plain content component — the document shell lives in
// src/Document.tsx. This file is the whole demo; replace its contents to
// start your app.
//
//
const LARGE_HEIGHT = 215; // h-96
const SMALL_HEIGHT = 64; // h-16

export default function App() {
  const [scrolled, setScrolled] = createSignal(false);

  const isShrunk = () => scrolled();

  onSettled(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Router>
      {(props) => (
        <>
          <div class="min-h-screen flex flex-col">
            <div class="flex flex-1">
              <div
                class="transition-all duration-300"
                style={{
                  height: `${isShrunk() ? SMALL_HEIGHT : LARGE_HEIGHT}px`,
                }}
              />

              <header
                class={[
                  `fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out flex items-center `,
                  { "h-53.75": !isShrunk(), "h-16": isShrunk() },
                ]}
              >
                <img
                  src={MaxImg}
                  class={[
                    "w-full absolute z-10 transition-all duration-300 overflow-clip object-cover object-top",
                    { "h-53.75": !isShrunk(), "h-16": isShrunk() },
                  ]}
                />
                <h1
                  class={[
                    "font-semibold text-white transition-all duration-300 px-6 z-20",
                    { "text-4xl": !isShrunk(), "text-xl": isShrunk() },
                  ]}
                >
                  Managing Maximilian
                </h1>
              </header>
              <div class="flex flex-1 flex-row">
                <aside class="grow-y bg-green-600 w-48">SIDEBAR</aside>
                <main
                  class={[
                    "flex-1 mb-20 px-4 pt-8",
                    { "mt-53.75": !isShrunk(), "mt-16": isShrunk() },
                  ]}
                >
                  {props.children}
                </main>
              </div>
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
