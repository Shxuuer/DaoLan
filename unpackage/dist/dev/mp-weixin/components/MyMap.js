"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "MyMap",
  props: ["L_latitude", "L_longitude", "L_title"],
  emits: ["update:latitude", "update:longitude"],
  data() {
    return {
      scale: 13,
      markers: [],
      getLocationTimer: null,
      latitude: "",
      longitude: ""
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
    a: common_vendor.o((...args) => $options.refresh && $options.refresh(...args)),
    b: $data.longitude,
    c: $data.latitude,
    d: $data.scale,
    e: $data.markers,
    f: common_vendor.o((...args) => $options.update && $options.update(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9e52463"]]);
wx.createComponent(Component);
