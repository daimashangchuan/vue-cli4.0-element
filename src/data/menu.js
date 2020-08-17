/**
 * 侧边栏展示的数据
 */
const menuData = [
  {
    // 一级
    name: "message",
    icon: "el-icon-message",
    title: "权限管理",
    value: "",
    disabled: false,
    // 二级
    childs: [{
      name: "auth",
      icon: "el-icon-loading",
      title: "权限管理",
      value: "/auth",
      disabled: false,
    }, {
      name: "role",
      icon: "el-icon-bell",
      title: "角色管理",
      value: "/role",
      disabled: false,
    }, {
      name: "menu",
      icon: "el-icon-edit",
      title: "菜单管理",
      value: "/menu",
      disabled: false,
    }, {
      name: "group",
      icon: "el-icon-mobile-phone\r\n",
      title: "分组管理",
      value: "/group",
      disabled: false,
    }],
  }, 
  {
    // 一级
    name: "user",
    icon: "el-icon-news",
    title: "帐号管理",
    value: "",
    disabled: false,
    // 二级
    childs: [{
      name: "account",
      icon: "el-icon-phone-outline\r\n",
      title: "帐号管理",
      value: "/account",
      disabled: false,
    }, {
      name: "passManage",
      icon: "el-icon-service\r\n",
      title: "密码管理",
      value: "",
      disabled: false,
      // 三级
      childs: [{
        name: "integralManage",
        icon: "el-icon-picture",
        title: "积分管理",
        value: "/integral",
        disabled: false,
      }]
    }],
  }, 
  {
    // 一级
    name: "contentManage",
    icon: "el-icon-rank",
    title: "分类管理",
    value: "",
    disabled: false,
    // 二级
    childs: [{
      name: "classifyManage",
      icon: "el-icon-printer",
      title: "分类管理",
      value: "/classify",
      disabled: false,
    }],
  },{
    // 一级
    name: "document",
    icon: "el-icon-document",
    title: "分类管理",
    value: "/document",
    disabled: false,
  }
];

export default menuData;
