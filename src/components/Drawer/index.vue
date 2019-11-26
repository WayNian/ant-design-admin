<template>
  <div>
    <a-drawer
      width="300"
      title="功能设置"
      placement="right"
      :closable="false"
      @close="setDrawerVisible"
      :visible="isDrawerVisible"
      :handle="handle"
    >
      <a-button
        type="primary"
        class="setting-drawer-visible"
        @click="setDrawerVisible"
        :icon="isDrawerVisible ? 'close' : 'setting'"
      ></a-button>
      <div class="setting-drawer-layout">
        <a-list :split="false">
          <h3>左侧菜单栏颜色</h3>
          <a-list-item>
            <a-list-item-meta>
              <div slot="title">主题色切换</div>
            </a-list-item-meta>
            <a-switch
              size="small"
              :defaultChecked="isSilderDark"
              @change="setSilderDark"
              checkedChildren="暗"
              unCheckedChildren="亮"
            />
          </a-list-item>
        </a-list>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      handle: <div /> // 悬浮设置按钮的关键
    };
  },
  computed: {
    ...mapState("setting", {
      isDrawerVisible: "isDrawerVisible",
      isSilderDark: "isSilderDark"
    })
  },
  methods: {
    ...mapMutations("setting", {
      setDrawerVisible: "setDrawerVisible", // 抽屉的开关
      setSilderDark: "setSilderDark" // 菜单栏的颜色 暗/亮
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
