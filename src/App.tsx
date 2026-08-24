import { createSignal, onSettled } from "solid-js";
import MaxImg from "./max.jpg";
import "./App.css";
import { Router } from "./router";
import Header from "./layout/Header";
import { Main } from "./layout/Main";
// The app root: a plain content component — the document shell lives in
// src/Document.tsx. This file is the whole demo; replace its contents to
// start your app.
//
//


export default function App() {



  return (
    <Router>
      {(props) => (
        <>
          <Main>
            {props.children}
          </Main>

        </>
      )}
    </Router>
  );
}
