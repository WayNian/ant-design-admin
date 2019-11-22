<template>
  <div>
    <a-drawer
      width="300"
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="isDrawerVisible"
      :handle="handle"
    >
      <div class="setting-drawer-layout"></div>
      <a-button
        type="primary"
        class="setting-drawer-visible"
        @click="setDrawerVisible"
        :icon="isDrawerVisible ? 'close' : 'setting'"
      ></a-button>
    </a-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      handle: <div /> //  悬浮设置按钮的关键
    };
  },
  computed: {
    ...mapState("setting", {
      isDrawerVisible: "isDrawerVisible"
    })
  },
  methods: {
    ...mapMutations("setting", {
      setDrawerVisible: "setDrawerVisible"
    })
  }
};
</script>

<style lang="scss">
.setting-drawer-visible {
  position: absolute;
  top: 240px;
  width: 48px;
  height: 48px;
  right: 300px;
  z-index: 999;
  text-align: center;
  border-radius: 4px 0 0 4px;
  i {
    color: $white;
    font-size: 20px;
  }
}
</style>
