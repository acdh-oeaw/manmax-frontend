import { useLocation } from "@solidjs/router";
import { createSignal, onSettled } from "solid-js";

import MaxImg from "../max.jpg";
import { paths } from "../router";
import { JSX } from "@solidjs/web/jsx-runtime";

const SMALL_HEIGHT = 64; // h-16

type MainProps = {
  children: JSX.Element;
}

export function Main(props: MainProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = createSignal(false);

  const isHome = () => location.pathname === "/";
  const isShrunk = () => !isHome() || scrolled();

  const [LARGE_HEIGHT, setLargeHeight] = createSignal(215); // h-96

  let imgRef!: HTMLImageElement;

  onSettled(() => {
    setLargeHeight(imgRef.height);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
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
            `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex items-center shadow-2xl`,
            { "h-53.75": !isShrunk(), "h-16": isShrunk() },
          ]}
        >
          <img
            ref={imgRef}
            src={MaxImg}
            class={[
              "w-full absolute z-10 transition-all duration-300 ease-in-out overflow-clip object-cover object-top",
              { "h-53.75": !isShrunk(), "h-16": isShrunk() },
            ]}
          />
          <h1 class={["transition-all duration-500 px-6 z-20", ,]}>
            <a
              class={[
                "font-semibold text-white hover:text-slate-50/90 transition-transform duration-300 ease-in-out",
                { "text-4xl": !isShrunk(), "text-xl": isShrunk() },
              ]}
              href={paths()}
            >
              Managing Maximilian
            </a>
          </h1>
        </header>
        <div class="flex flex-1 flex-row transition-transform duration-300 ease-in-out">
          <aside
            class={[
              "grow-y  w-48 relative bg-green-400 drop-shadow-xl shadow-inner",
              { "mt-53.75": !isShrunk(), "mt-16": isShrunk() },
            ]}
          >
            <div class="fixed [&>a]:block [&>a]:w-48  [&>a]:bg-green-600 [&>a]:hover:bg-green-500 [&>a]:active:shadow-inner [&>a]:text-white [&>a]:uppercase [&>a]:font-semibold [&>a]:text-sm [&>a]:p-2 [&>a]:aria-[current=page]:bg-red-600 [&>a]:aria-[current=page]:cursor-default">
              <a href={paths()}>Home</a>
              <a href={paths.about()}>About</a>
              <a href={paths.person()}>Persons</a>
              <a href={paths.factoid()}>Factoids</a>
              <a href={paths.network()}>Network</a>
            </div>
          </aside>
          <main
            class={[
              "flex-1 mb-20 px-12 pt-12",
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
  );
}
