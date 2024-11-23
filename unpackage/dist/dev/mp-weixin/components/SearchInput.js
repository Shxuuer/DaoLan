"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "SearchInput",
  props: ["placeholder"],
  emits: ["search"],
  data() {
    return {};
  },
  methods: {
    handleInput(e) {
      const input = e.detail.value;
      this.$emit("search", input);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$4,
    b: $props.placeholder,
    c: common_vendor.o((...args) => $options.handleInput && $options.handleInput(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
