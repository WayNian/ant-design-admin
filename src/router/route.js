const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/")
  }
];

export default routes;
