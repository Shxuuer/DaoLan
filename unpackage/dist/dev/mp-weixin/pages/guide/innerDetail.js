"use strict";
const static_const = require("../../static/const.js");
const common_vendor = require("../../common/vendor.js");
const TopBar = () => "../../components/TopBar.js";
const _sfc_main = {
  name: "inner",
  components: { TopBar },
  data() {
    return {
      pageInfo: {
        name: "",
        Detail: "",
        imgUrl: ""
      },
      _const: static_const._const
    };
  },
  onLoad: function(option) {
    this.pageInfo = { ...option };
  }
};
if (!Array) {
  const _component_TopBar = common_vendor.resolveComponent("TopBar");
  _component_TopBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $data.pageInfo.name
    }),
    b: $data._const.imgURL + $data.pageInfo.imgUrl,
    c: common_vendor.t($data.pageInfo.Detail)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-85a513d6"]]);
wx.createPage(MiniProgramPage);
