<template>
  <a-layout class="home-layout" id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :class="{ 'ant-layout-sider-light': !isSilderDark }"
    >
      <div class="logo" />
      <nav-menu></nav-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        :class="[
          navMode === 'horizontal' && isSilderDark
            ? 'ant-layout-header-dark'
            : ''
        ]"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="header-layout">
          <a-badge :count="9">
            <a-icon type="notification" />
          </a-badge>
          <a-avatar
            src="https://pic.superbed.cn/item/5d89c82d451253d1784eeb51.png"
            class="ml-default"
          />
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <vue-drawer></vue-drawer>
  </a-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavMenu from "@/components/NavMenu/";
import VueDrawer from "@/components/Drawer/";
export default {
  components: {
    NavMenu,
    VueDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    ...mapState("setting", {
      navMode: "navMode",
      isSilderDark: "isSilderDark"
    })
  },
  methods: {
    ...mapMutations("setting", {})
  }
};
</script>
<style lang="scss">
.home-layout {
  min-height: 100%;
  .ant-layout-sider {
    transition: background-color 0.3s;
  }
  .ant-layout-sider-light {
    background-color: #ffffff;
  }
  .ant-layout-header {
    background: #fff;
    display: flex;
    transition: all 0.3s;
  }
  .header-layout {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .ant-badge {
    font-size: 16px;
  }
  .ant-avatar-image {
    width: 24px;
    height: 24px;
  }
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
  background: red;
  margin: 16px;
}
</style>
