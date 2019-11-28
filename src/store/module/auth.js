import http from "@/utils/http/";
const state = {
  menuList: [
    {
      name: "控制台",
      icon: "el-icon-star-on",
      path: "/dashboard"
    },
    {
      name: "产品管理",
      icon: "el-icon-star-on",
      path: "/product"
    },
    {
      name: "设备管理",
      icon: "el-icon-star-on",
      path: "/device"
    },
    {
      name: "系统管理",
      icon: "el-icon-document",
      child: [
        {
          path: "/manage/hospital",
          name: "医院管理"
        },
        {
          path: "/manage/department",
          name: "部门管理"
        },
        {
          path: "/manage/user",
          name: "用户管理"
        },
        {
          path: "/manage/role",
          name: "角色管理"
        }
      ]
    },
    {
      name: "固件升级",
      icon: "el-icon-menu",
      path: "/firmware"
    },
    {
      name: "更多扩展",
      icon: "el-icon-menu",
      path: "/extend"
    },
    {
      name: "技术支持",
      icon: "el-icon-menu",
      path: "/support"
    }
  ]
};
const mutations = {
  setSilderDark(state, data) {
    state.isSilderDark = data;
  },
  setMenuList(state, data) {
    state.menuList = data;
    //  window.localStorage.getItem("menuList")
  }
};
const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      http
        .post("/user/login", params)
        .then(res => {
          resolve(res);
          commit("setMenuList", res.data.menuList);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("menuList", res.data.menuList);
        })
        .catch(() => {
          reject();
        });
    });
  },
  // eslint-disable-next-line no-empty-pattern
  logout({}, params) {
    return new Promise((resolve, reject) => {
      http
        .post("/user/logout", params)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  getMenuList({ commit }, params) {
    return new Promise((resolve, reject) => {
      http
        .post("/user/menu-list", params)
        .then(res => {
          resolve(res);
          commit("setMenuList", res.data);
        })
        .catch(() => {
          reject();
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
