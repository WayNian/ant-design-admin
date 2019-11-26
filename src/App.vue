<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import { mapState } from "vuex";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import ja_JP from "ant-design-vue/lib/locale-provider/ja_JP";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
const langData = {
  en: null,
  zh_CN: zh_CN,
  ja_JP: ja_JP
};
export default {
  data() {
    return {
      locale: zh_CN
    };
  },
  watch: {
    lang(val) {
      this.locale = langData[val];
    }
  },
  computed: {
    ...mapState("setting", {
      lang: "lang"
    })
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100%;
}
</style>
