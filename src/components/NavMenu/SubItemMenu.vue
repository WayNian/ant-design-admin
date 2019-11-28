<template functional>
  <!--  functional 函数化组件 -->
  <!-- https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue -->
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.name }}</span>
    </span>
    <template v-for="item in props.menuInfo.child">
      <a-menu-item v-if="!item.child" :key="item.path">
        <a-icon type="pie-chart" />
        <span>{{ item.name }}</span>
      </a-menu-item>
      <sub-item-menu v-else :key="item.path" :sub-menu-item="item" />
    </template>
  </a-sub-menu>
</template>

<script>
/**
 * https://www.antdv.com/components/menu-cn/
 * 使用单文件方式递归生成菜单。
 *因组件内部会动态更改a-sub-menu的属性，如果拆分成单文件，无法将属性挂载到a-sub-menu上，
 *你需要自行声明属性并挂载。为了方便，避免属性的声明，我们推荐使用函数式组件。
 *  */

export default {
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped></style>
