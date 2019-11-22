<template>
  <a-layout class="home-layout" id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      v-if="navMode === 'inline'"
    >
      <div class="logo" />
      <a-menu theme="dark" :mode="navMode" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
          v-if="navMode === 'inline'"
        />
        <a-menu
          theme="dark"
          :mode="navMode"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px', width: 'auto' }"
          v-if="navMode === 'horizontal'"
        >
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <a-button type="primary" @click="changeNavMode">切换Menu模式</a-button>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    ...mapState("setting", {
      navMode: "navMode"
    })
  },
  methods: {
    changeNavMode() {
      //   if (this.navMode === "inline") {
      //     this.navMode = "horizontal";
      //   } else {
      //     this.navMode = "inline";
      //   }
    }
  }
};
</script>
<style>
.home-layout {
  min-height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
