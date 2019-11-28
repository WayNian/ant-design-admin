var data = [
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
];

export default {
  path: "user/menu-list",
  data: {
    menuList: data
  }
};
