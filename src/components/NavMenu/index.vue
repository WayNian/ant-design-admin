<template>
  <div>
    <a-menu
      :defaultSelectedKeys="[activeKey]"
      :theme="isSilderDark ? 'dark' : 'light'"
      mode="inline"
    >
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.child" :key="item.path">
          <a-icon type="pie-chart" />
          <span>{{ item.name }}</span>
        </a-menu-item>
        <sub-item-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SubItemMenu from "./SubItemMenu";
export default {
  props: {},
  components: { SubItemMenu },
  data() {
    return {
      activeKey: ""
    };
  },
  watch: {
    $route: {
      handler(val) {
        console.log(val);

        if (val.path === this.activeKey) return;
        this.activeKey = val.path;
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      isSilderDark: state => state.setting.isSilderDark,
      menuList: state => state.auth.menuList
    })
  }
};
</script>

<style lang="scss">
.a-menu {
  transition: all 0.6s;
}
</style>
