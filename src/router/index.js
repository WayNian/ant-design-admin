import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   // NProgress.start();
//   let token = window.localStorage.getItem("token");
//   if (token) {
//     //如果是登录状态，跳转login地址，则自动跳回到系统首页
//     if (to.path === "/login") {
//       next({
//         path: "/dashboard",
//         replace: true
//       });
//       // NProgress.done();
//     } else if (to.path.indexOf("/error/404") >= 0) {
//       //防止重定向到404页面造成beforeEach死循环
//       next();
//     } else {
//       next();
//       // initRouter(router).then(() => {
//       //   let isPermission = false;
//       //   permissionList.forEach(v => {
//       //     //判断跳转的页面是否在权限列表中
//       //     if (v.path === to.path) {
//       //       isPermission = true;
//       //     }
//       //   });
//       //   if (isPermission) {
//       //     next();
//       //   } else {
//       //     next({
//       //       path: "/error/404",
//       //       replace: true
//       //     });
//       //   }
//       // });
//     }
//   }
// });

export default router;
