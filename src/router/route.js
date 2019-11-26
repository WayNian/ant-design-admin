const routes = [
  {
    path: "/",
    component: () => import("../views/home/"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard/")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/")
  }
];

export default routes;
