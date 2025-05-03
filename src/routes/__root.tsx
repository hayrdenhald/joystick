import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Route as aboutRoute } from "./about.tsx";
import { Route as ticTacToeRoute } from "./games/tic-tac-toe/index.tsx";
import { Route as indexRoute } from "./index.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to={indexRoute.to}>Index</Link>
        <Link to={aboutRoute.to}>About</Link>
        <Link to={ticTacToeRoute.to}>Tic Tac Toe</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => {
    return (
      <div>
        <h1>This page doesn't exist!</h1>
      </div>
    );
  },
});
