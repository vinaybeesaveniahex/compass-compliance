import type { RouteObject } from "react-router-dom";
import { landingRoutes } from "../features/landing/routes";
import { notFoundRoutes } from "../features/not-found/routes";
import { authRoutes } from "../features/auth/routes";
import { dashboardRoutes } from "../features/dashboard/routes";
import { compassRoutes } from "../features/compass/routes";

export const publicRoutes: RouteObject[] = [
  {
    children: [
      ...landingRoutes,
      ...notFoundRoutes,
      ...authRoutes,
      ...dashboardRoutes,
      ...compassRoutes,
    ],
  },
];
