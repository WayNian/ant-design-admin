<template>
  <!-- https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue -->
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon type="mail" /><span>{{ menuInfo.name }}</span>
    </span>
    <template v-for="item in menuInfo.child">
      <a-menu-item v-if="!item.child" :key="item.path">
        <a-icon type="pie-chart" />
        <span>{{ item.name }}</span>
      </a-menu-item>
      <sub-item-menu v-else :key="item.path" :sub-menu-item="item" />
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from "ant-design-vue";
/**
 * https://www.antdv.com/components/menu-cn/
 * 使用单文件方式递归生成菜单。
 *因组件内部会动态更改a-sub-menu的属性，如果拆分成单文件，无法将属性挂载到a-sub-menu上，
 *你需要自行声明属性并挂载。为了方便，避免属性的声明，我们推荐使用函数式组件。
 *  */

export default {
  name: "SubItemMenu", // need
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    console.log("menuInfo", this.menuInfo);
  }
};
</script>

<style lang="scss" scoped></style>
