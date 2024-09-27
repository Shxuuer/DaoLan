"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "MyMap",
  props: ["latitude", "longitude"],
  emits: ["update:latitude", "update:longitude"],
  data() {
    return {
      scale: 13,
      markers: [],
      getLocationTimer: null
    };
  },
  methods: {
    refresh() {
      const map = common_vendor.index.createMapContext("map", this);
      map.moveToLocation({
        longitude: this.longitude,
        latitude: this.latitude
      });
    }
  },
  created() {
    common_vendor.index.startLocationUpdate({});
    const that = this;
    common_vendor.index.onLocationChange(function(res) {
      that.$emit("update:latitude", res.latitude);
      that.$emit("update:longitude", res.longitude);
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.refresh && $options.refresh(...args)),
    b: $props.longitude,
    c: $props.latitude,
    d: $data.scale,
    e: $data.markers
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9e52463"]]);
wx.createComponent(Component);
