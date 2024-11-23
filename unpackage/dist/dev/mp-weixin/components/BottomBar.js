"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "BottomBar",
  props: ["selected"],
  data() {
    return {
      colors: {
        guide: "#888888",
        my: "#888888",
        vr: "#888888",
        bgc: "#FFFFFF",
        bgshw: "0px -4px 4px rgba(0, 0, 0, 0.05)"
      }
    };
  },
  methods: {
    routerTo(path) {
      const page = getCurrentPages();
      if (page[page.length - 1].route === path)
        return;
      path = "/" + path;
      common_vendor.index.redirectTo({
        animationDuration: 500,
        url: path
      });
    }
  },
  created() {
    if (this.selected === 1) {
      this.colors = {
        guide: "#3182CE",
        my: "#888888",
        vr: "#888888",
        bgc: "#FFFFFF",
        bgshw: "0px -4px 4px rgba(0, 0, 0, 0.05)"
      };
    } else if (this.selected === 2) {
      this.colors = {
        guide: "#888888",
        my: "#888888",
        vr: "#fcfcfc",
        bgc: "#222222",
        bgshw: "0px -4px 4px rgba(255, 255, 255, 0.05)"
      };
    } else if (this.selected === 3) {
      this.colors = {
        guide: "#888888",
        my: "#3182CE",
        vr: "#888888",
        bgc: "#FFFFFF",
        bgshw: "0px -4px 4px rgba(0, 0, 0, 0.05)"
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.colors.guide !== "#3182CE"
  }, $data.colors.guide !== "#3182CE" ? {
    b: common_assets._imports_0
  } : {
    c: common_assets._imports_1
  }, {
    d: $data.colors.guide,
    e: common_vendor.o(($event) => $options.routerTo("pages/guide/index")),
    f: common_assets._imports_2,
    g: $data.colors.vr,
    h: common_vendor.o(($event) => $options.routerTo("pages/vr/index")),
    i: $data.colors.my !== "#3182CE"
  }, $data.colors.my !== "#3182CE" ? {
    j: common_assets._imports_3
  } : {
    k: common_assets._imports_4
  }, {
    l: $data.colors.my,
    m: common_vendor.o(($event) => $options.routerTo("pages/my/index")),
    n: $data.colors.bgc,
    o: $data.colors.bgshw
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-03fd682b"]]);
wx.createComponent(Component);
