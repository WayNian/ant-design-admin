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
      child: [
        {
          path: "/manage/hospital3",
          name: "医院管理"
        },
        {
          path: "/manage/department4",
          name: "部门管理"
        },
        {
          path: "/manage/user5",
          name: "用户管理"
        },
        {
          path: "/manage/role6",
          name: "角色管理"
        }
      ]
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
  ],
  subpageList: []
};
const mutations = {
  setSilderDark(state, data) {
    state.isSilderDark = data;
  },
  setMenuList(state, data) {
    state.menuList = data;
  },
  setSubpageList(state, data) {
    state.subpageList = data;
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
  },
  // eslint-disable-next-line no-empty-pattern
  getPermissionList({}) {
    return new Promise(resolve => {
      let permissionList = [];
      const flatNavList = arr => {
        for (let v of arr) {
          if (v.child && v.child.length) {
            flatNavList(v.child);
          } else {
            permissionList.push(v);
          }
        }
      };
      flatNavList(state.menuList);
      flatNavList(state.subpageList);
      resolve(permissionList);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
