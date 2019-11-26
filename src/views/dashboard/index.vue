<template>
  <div>
    <p>{{ $t("name") }}</p>

    <a-date-picker />
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="Name"
      >
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your name'
                },
                {
                  max: 5,
                  message: '长度在 3 到 5 个字符'
                }
              ],
              validateTrigger: 'blur'
            }
          ]"
          placeholder="Please input your name"
        />
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="Nickname"
      >
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [
                { required: checkNick, message: 'Please input your nickname' }
              ]
            }
          ]"
          placeholder="Please input your nickname"
        />
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-checkbox :checked="checkNick" @change="handleChange">
          Nickname is required
        </a-checkbox>
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button type="primary" @click="check">
          Check
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  computed: {
    ...mapState("setting", {})
  },
  methods: {
    ...mapMutations("setting", {}),
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>
