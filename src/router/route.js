const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/error",
    component: () => import("../views/error/"),
    children: [
      {
        path: "/error/404",
        component: () => import("../views/error/404/")
      }
      // {
      //   path: "/error/401",
      //   component: () => import("../views/error/401")
      // }
    ]
  },
  {
    path: "",
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
  },
  {
    path: "*",
    redirect: "/error/404/"
  }
];

export default routes;
