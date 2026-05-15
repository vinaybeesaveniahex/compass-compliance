import type { RouteObject } from "react-router-dom";
import { CompassPage } from "./pages/CompassPage";
import { WizardPage } from "./pages/WizardPage";
import { EmployeeCensus } from "./pages/EmployeeCensus";

export const compassRoutes: RouteObject[] = [
  {
    path: "/compass",
    element: <CompassPage />,
  },
  {
    path: "/wizard",
    element: <WizardPage />,
  },
  {
    path: "/employee-census",
    element: <EmployeeCensus />,
  },
];
