"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "MyMap",
  props: ["L_latitude", "L_longitude", "L_title", "height"],
  emits: ["update:latitude", "update:longitude"],
  data() {
    return {
      scale: 13,
      markers: [],
      getLocationTimer: null,
      latitude: "",
      longitude: "",
      heightZ: ""
    };
  },
  methods: {
    refresh() {
      const map = common_vendor.index.createMapContext("map", this);
      if (this.L_latitude & this.L_longitude)
        map.moveToLocation({
          longitude: this.L_longitude,
          latitude: this.L_latitude
        });
      else
        map.moveToLocation({
          longitude: this.longitude,
          latitude: this.latitude
        });
    },
    update() {
      if (this.markers.length === 0 && this.L_latitude !== "")
        this.markers.push({
          id: 1,
          latitude: this.L_latitude,
          longitude: this.L_longitude,
          title: this.L_title,
          width: 30,
          height: 45
        });
      this.refresh();
    }
  },
  beforeMount() {
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
    a: common_assets._imports_0$4,
    b: common_vendor.o((...args) => $options.refresh && $options.refresh(...args)),
    c: $data.longitude,
    d: $data.latitude,
    e: $data.scale,
    f: $data.markers,
    g: common_vendor.o((...args) => $options.update && $options.update(...args)),
    h: $props.height || "650rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9e52463"]]);
wx.createComponent(Component);
