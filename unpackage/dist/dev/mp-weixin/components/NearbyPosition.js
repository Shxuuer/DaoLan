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
    goToDetail(name, id, index) {
      if (this.isInner) {
        this.gotoInnerDetail(index);
        return;
      }
      const page = getCurrentPages();
      const path = `/pages/guide/detail?name=${name}&id=${id}`;
      if (page[page.length - 1].route === "pages/guide/detail")
        common_vendor.index.redirectTo({ url: path });
      else
        common_vendor.index.navigateTo({ url: path });
    },
    goToInner(name, id) {
      common_vendor.index.navigateTo({ url: `/pages/guide/inner?name=${name}&id=${id}` });
    },
    gotoInnerDetail(index) {
      const tmp = this.nearby_position[index];
      common_vendor.index.navigateTo({
        url: `/pages/guide/innerDetail?name=${tmp.title}&Detail=${tmp.description}&imgUrl=${tmp.resource.coverImages}`
      });
    },
    playSound(text) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.nearby_position, (item, index, i0) => {
      return common_vendor.e({
        a: item.resource.coverImages
      }, item.resource.coverImages ? {
        b: $data._const.imgURL + item.resource.coverImages
      } : {}, {
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.description),
        e: !$props.isInner && item.hasSurfaces || $props.isInner || item.resource.audio != "" && item.resource.audio
      }, !$props.isInner && item.hasSurfaces || $props.isInner || item.resource.audio != "" && item.resource.audio ? common_vendor.e({
        f: !$props.isInner && item.hasSurfaces
      }, !$props.isInner && item.hasSurfaces ? {
        g: common_vendor.o(($event) => $options.goToInner(item.title, item.id), index)
      } : {}, {
        h: $props.isInner
      }, $props.isInner ? {
        i: common_vendor.o(($event) => $options.goToDetail(item.title, item.id, index), index)
      } : {}, {
        j: item.resource.audio != "" && item.resource.audio
      }, item.resource.audio != "" && item.resource.audio ? {
        k: common_assets._imports_0$2,
        l: common_vendor.o(($event) => $options.playSound(item.description), index)
      } : {}) : {}, {
        m: common_vendor.o(($event) => $options.goToDetail(item.title, item.id, index), index),
        n: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35e19124"]]);
wx.createComponent(Component);
