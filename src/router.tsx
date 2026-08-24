import { createRouter, defineRoute } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Factoid from "./pages/Factoid";
import { getFactoid, getFactoidList } from "./test_data_loaders/factoid";
import FactoidList from "./pages/FactoidList";
import { lazy } from "solid-js";
import Network from "./pages/Network";

export const Router = createRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: lazy(() => import("./pages/About")) },
    { path: "/network", component: lazy(() => import("./pages/Network")) },
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
  ],
});

export const { paths } = Router;
