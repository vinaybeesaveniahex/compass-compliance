import type { RouteObject } from "react-router-dom";
import { landingRoutes } from "../features/landing/routes";
import { notFoundRoutes } from "../features/not-found/routes";

export const publicRoutes: RouteObject[] = [
  {
    children: [...landingRoutes, ...notFoundRoutes],
  },
];
