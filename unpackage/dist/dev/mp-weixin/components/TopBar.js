"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "TopBar",
  props: ["name", "buttonName"],
  emits: ["buttonActive"],
  data() {
    return {
      icon: {}
    };
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack(1);
    }
  },
  beforeMount() {
    this.icon = common_vendor.wx$1.getMenuButtonBoundingClientRect();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.name),
    b: common_assets._imports_0$2,
    c: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    d: $data.icon.top - 1 + "px",
    e: $data.icon.bottom + 20 + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-32d0c71d"]]);
wx.createComponent(Component);
