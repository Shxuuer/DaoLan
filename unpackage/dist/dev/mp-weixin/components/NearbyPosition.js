"use strict";
const common_vendor = require("../common/vendor.js");
const static_const = require("../static/const.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "NearbyPosition",
  props: ["nearby_position", "isInner"],
  data() {
    return {
      _const: static_const._const
    };
  },
  methods: {
    goToDetail(name, id) {
      const page = getCurrentPages();
      const path = `/pages/guide/detail?name=${name}&id=${id}`;
      if (page[page.length - 1].route === "pages/guide/detail")
        common_vendor.index.redirectTo({ url: path });
      else
        common_vendor.index.navigateTo({ url: path });
    },
    goToInner(name, type) {
      if (type === 1)
        common_vendor.index.navigateTo({ url: "/pages/guide/inner?name=" + name });
      else if (type === 2)
        common_vendor.index.navigateTo({ url: "/pages/guide/inner?name=" + name });
    },
    playSound(text) {
      const plugin = requirePlugin("WechatSI");
      plugin.textToSpeech({
        lang: "zh_CN",
        tts: true,
        content: text,
        success: function(res) {
          console.log("succ tts", res.filename);
        },
        fail: function(res) {
          console.log("fail tts", res);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.nearby_position, (item, index, i0) => {
      return common_vendor.e({
        a: $data._const.baseURL + item.Resource.CoverImages[item.Resource.CoverImages.length - 1],
        b: common_vendor.t(item.Title),
        c: common_vendor.t(item.Description)
      }, !$props.isInner ? {
        d: common_vendor.o(($event) => $options.goToInner(item.Title, 1), index)
      } : {}, {
        e: common_vendor.o(($event) => $options.playSound(item.Description), index),
        f: common_vendor.o(($event) => $options.goToDetail(item.Title, item.ID), index),
        g: index
      });
    }),
    b: !$props.isInner,
    c: common_assets._imports_0$3
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35e19124"]]);
wx.createComponent(Component);
