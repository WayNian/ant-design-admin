import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./lang/";

Vue.use(VueI18n);
const i18n = new VueI18n({
  // 当前语言环境
  locale: "zh_CN",
  // 默认语言环境。如果locale中无匹配项则采用该项值
  fallbackLocale: "zh_CN",
  messages
});

export default i18n;
