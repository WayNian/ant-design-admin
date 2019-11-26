import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "@/router";
import store from "@/store";
import i18n from "@/utils/i18n/"; //国际化

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
