"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "SelectGroup",
  props: ["types"],
  emits: ["select"],
  methods: {
    handleSelect(index) {
      if (this.selected === index) {
        this.selected = -1;
        this.$emit("select", void 0);
        return;
      }
      this.selected = index;
      this.$emit("select", this.types[index]);
    }
  },
  data() {
    return {
      selected: -1
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.types, (cell, index, i0) => {
      return {
        a: common_vendor.t(cell),
        b: common_vendor.o(($event) => $options.handleSelect(index), index),
        c: $data.selected === index ? "#3e3e3e" : "#ffffff",
        d: $data.selected === index ? "#e3e3e3" : "#333333",
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f7cdf4c"]]);
wx.createComponent(Component);
