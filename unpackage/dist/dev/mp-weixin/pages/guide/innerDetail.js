"use strict";
const common_vendor = require("../../common/vendor.js");
const TopBar = () => "../../components/TopBar.js";
const _sfc_main = {
  name: "inner",
  components: { TopBar },
  data() {
    return {};
  },
  onLoad: function(option) {
    this.name = option.name;
  }
};
if (!Array) {
  const _component_TopBar = common_vendor.resolveComponent("TopBar");
  _component_TopBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: _ctx.name
    }),
    b: common_vendor.t(_ctx.detail)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-85a513d6"]]);
wx.createPage(MiniProgramPage);
