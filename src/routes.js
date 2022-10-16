import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: React.lazy(() => import("pages/Home")),
  },
  {
    path: "/company-profiles",
    exact: true,
    name: "Company Profiles",
    component: React.lazy(() => import("pages/CompanyProfiles")),
  },
  {
    path: "/company-profile/:company",
    exact: true,
    name: "CompanyProfile",
    component: React.lazy(() => import("pages/CompanyProfile")),
  },
];

export default routes;
