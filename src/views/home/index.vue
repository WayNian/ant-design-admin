<template>
  <a-layout class="home-layout" id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :class="{ 'ant-layout-sider-light': !isSilderDark }"
    >
      <div :class="[isSilderDark ? '' : 'logo-dark', 'logo']" v-if="collapsed">
        W
      </div>
      <div :class="[isSilderDark ? '' : 'logo-dark', 'logo']" v-if="!collapsed">
        WAYNIAN
      </div>

      <nav-menu></nav-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="header-layout">
          <a-dropdown placement="bottomCenter" :trigger="['click']">
            <div>
              <a-icon type="global" class="click" />
            </div>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="changeLang('en')">English</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="changeLang('zh_CN')"
                  >中文(简体)</a
                >
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="changeLang('ja_JP')">日本語</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-badge :count="9" class="ml-default">
            <a-icon type="notification" />
          </a-badge>
          <a-dropdown placement="bottomRight" :trigger="['click']">
            <div class="ml-default header-person click">
              <a-avatar
                src="https://pic.superbed.cn/item/5d89c82d451253d1784eeb51.png"
              />
              <span class="ml-small ">东方月初</span>
            </div>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">个人中心</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">系统设置</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="logout">退出登录</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
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
import { mapState, mapMutations, mapActions } from "vuex";
import i18n from "@/utils/i18n/";
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
      isSilderDark: "isSilderDark",
      lang: "lang"
    })
  },
  methods: {
    ...mapMutations("setting", {
      setLang: "setLang"
    }),
    ...mapActions("auth", {
      logoutHttp: "logout"
    }),
    logout() {
      this.logoutHttp().then(() => {
        console.log(this);

        this.$router.replace("/login");
        window.localStorage.setItem("token", null);
      });
    },
    changeLang(type) {
      if (type === this.lang) return;
      i18n.locale = type;
      this.setLang(type);
    }
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
  .anticon-global {
    font-size: 16px;
  }
  .ant-avatar-image {
    width: 24px;
    height: 24px;
  }
  .header-person {
    font-size: 14px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 25px;
    transition: color 0.3s;
  }
  .logo-dark {
    color: #001529;
  }
}
</style>
