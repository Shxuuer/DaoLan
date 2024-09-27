"use strict";
const common_vendor = require("../../common/vendor.js");
const BottomBar = () => "../../components/BottomBar.js";
const _sfc_main = {
  name: "My",
  components: { BottomBar },
  data() {
    return {};
  },
  methods: {},
  onLoad: function() {
    common_vendor.wx$1.hideHomeButton();
  }
};
if (!Array) {
  const _component_BottomBar = common_vendor.resolveComponent("BottomBar");
  _component_BottomBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      selected: 3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f97bc692"]]);
wx.createPage(MiniProgramPage);
