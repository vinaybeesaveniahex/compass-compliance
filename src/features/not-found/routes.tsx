import type { RouteObject } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
export const notFoundRoutes: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
