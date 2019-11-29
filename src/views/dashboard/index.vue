<template>
  <div>
    <p>{{ $t("name") }}</p>
    <div>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal title="Basic Modal" v-model="visible" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
    <a-date-picker />
    <div>
      <a-select
        mode="multiple"
        placeholder="Please select"
        :defaultValue="[0, 3, 5]"
        style="width: 200px"
      >
        <a-select-option
          v-for="(item, index) in 25"
          :key="(item + 9).toString(36) + item"
          :value="index"
        >
          {{ (item + 9).toString(36) + item }}
        </a-select-option>
      </a-select>
    </div>

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
import http from "@/utils/http/";
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
      visible: false,
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  mounted() {
    http
      .post("/user/login")
      .then(res => {
        console.log("-->>", res);
      })
      .catch(() => {});
  },
  computed: {
    ...mapState("setting", {})
  },
  methods: {
    ...mapMutations("setting", {}),
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
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
