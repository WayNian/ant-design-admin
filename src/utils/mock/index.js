import Mock from "mockjs";
import module from "./module";

module.forEach(function(res) {
  Mock.mock(`/api/${res.path}`, res.type, {
    code: 0,
    msg: "",
    data: {
      ...res.data
    }
  });
});
