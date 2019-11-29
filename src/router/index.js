import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route";
import store from "../store/";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
let permissionList = [];
const checkPermissionRoute = router => {
  return new Promise(resolve => {
    // if (!permissionList.length) {
    //store有dispatch方法，唯一能改变action
    store
      .dispatch("auth/getPermissionList")
      .then(res => {
        console.log("checkPermissionRoute", res);

        permissionList = res;
        res.forEach(v => {
          // 用到的深拷贝 （没有深拷贝，导致原数据改变）
          let routeItem = router.match(v.path);
          if (routeItem) {
            routeItem.meta.permission = v.permission ? v.permission : [];
            routeItem.meta.name = v.name;
          }
        });
        resolve();
      })
      //防止后端返回数据不正确或者用户手动修改localStorage的内容导致不正确，清除保存在本地的缓存
      .catch(() => {
        // window.localStorage.clear();
        // window.location.reload();
      });
  });
};
router.beforeEach((to, from, next) => {
  checkPermissionRoute();
  console.log(permissionList, from);
  next();

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
});

export default router;
