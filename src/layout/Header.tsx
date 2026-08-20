import { createSignal, onSettled } from "solid-js";
import { useLocation } from "@solidjs/router";
import { paths } from "../router";
import logo from "../csm_ManMax_logo_4c_c9cbcd8ef1-f90858f1.jpg"

function Header() {

  return (
    <header class="bg-blue-700 py-6  z-10  w-full h-18 flex items-center shadow-2xl fixed">
      <img src={logo} class="h-18 aspect-square mr-3"/>
      <h1 class="text-xl font-semibold text-amber-100"><a href={paths()} >Managing Maximilian</a></h1>
      <nav class="ml-4 uppercase text-yellow-400 font-semibold text-sm flex gap-3"><a href={paths.about} >About</a><a href={paths.factoid} >Factoids</a></nav>
    </header>
  );
}

export default Header;
