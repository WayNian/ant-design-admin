<template>
  <div class="login-layout">
    <div>
      <h1 class="web-title">XXXX后台管理系统</h1>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            class="login-input"
            size="large"
            v-decorator="[
              'account',
              {
                rules: [
                  { required: true, message: 'Please input your account!' },
                  {
                    max: 5,
                    message: '长度在 3 到 5 个字符'
                  }
                ],
                validateTrigger: 'blur'
              }
            ]"
          >
            <a-icon slot="prefix" type="user" style="color: #cccccc"
          /></a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            class="login-input"
            size="large"
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your password!' }
                ],
                validateTrigger: 'blur'
              }
            ]"
            ><a-icon slot="prefix" type="lock" style="color: #cccccc"
          /></a-input>
        </a-form-item>
        <div class="register-forget-layout">
          <a-button type="link">注册</a-button>
          <a-button type="link">忘记密码</a-button>
        </div>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    ...mapActions("auth", {
      loginHttp: "login"
    }),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loginHttp(values).then(() => {
            this.$router.replace("/dashboard");
          });
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-layout {
  width: 100%;
  height: 100vh;
  background-color: $darkBg;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  color: $white;
  overflow: hidden;
  // background: url(https://pic3.superbed.cn/item/5d36e1a3451253d1789d8dc3.jpg)
  //   center center/cover fixed;
  .web-title {
    color: $white;
    font-weight: 600;
    text-align: center;
  }
  .ant-form {
    width: 400px;
  }
  .login-input .ant-input {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    color: $white;
  }
  .ant-btn {
    width: 100%;
  }
  .register-forget-layout {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    .ant-btn {
      width: auto;
    }
  }
}
</style>
