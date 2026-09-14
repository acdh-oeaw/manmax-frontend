import { createRouter, defineRoute } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Factoid from "./pages/Factoid";
import { getFactoid, getFactoidList } from "./test_data_loaders/factoid";
import FactoidList from "./pages/FactoidList";
import { lazy } from "solid-js";
import Network from "./pages/Network";
import { getPerson, getPersonList } from "./test_data_loaders/person";
import { clientOnly } from "@solidjs/web";

export const Router = createRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: lazy(() => import("./pages/About")) },
    defineRoute({
      path: "/egonet/:id",
      preload: ({ params }) => getPerson(params.id),
      component: clientOnly(() => import("./pages/Network")),
    }),
    defineRoute({
      path: "/factoid",
      preload: ({ location }) => {
        const q =
          location.query.q && location.query.q.length > 0
            ? location.query.q
            : undefined;
        return getFactoidList(q as string | undefined);
      },
      component: lazy(() => import("./pages/FactoidList")),
    }),
    defineRoute({
      path: "/factoid/:id",
      preload: ({ params }) => getFactoid(params.id),
      component: lazy(() => import("./pages/Factoid")),
    }),
    defineRoute({
      path: "/person",
      preload: ({ location }) => {
        const q =
          location.query.q && location.query.q.length > 0
            ? location.query.q
            : undefined;
        return getPersonList(q as string | undefined);
      },
      component: lazy(() => import("./pages/PersonList")),
    }),
    defineRoute({
      path: "/person/:id",
      preload: ({ params }) => getPerson(params.id),
      component: lazy(() => import("./pages/Person")),
    }),
  ],
});

export const { paths } = Router;
