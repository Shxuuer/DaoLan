"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const TopBar = () => "../../components/TopBar.js";
const NearbyPosition = () => "../../components/NearbyPosition.js";
const MyMap = () => "../../components/MyMap.js";
const _sfc_main = {
  name: "detail",
  components: { TopBar, NearbyPosition, MyMap },
  data() {
    return {
      selectedID: 0,
      id: "",
      _const: static_const._const,
      place: {},
      nearbys: []
    };
  },
  onLoad: function(option) {
    this.id = option.id;
    this.name = option.name;
    common_vendor.index.request({
      method: "GET",
      url: static_const._const.baseURL + "/api/miniapp/outdoor-place?id=" + option.id,
      data: {},
      success: (res) => {
        this.place = res.data.Place;
        this.nearbys = res.data.Nearby;
        console.log(res.data);
      }
    });
  },
  methods: {
    changeSelected(index) {
      this.selectedID = index;
    }
  }
};
if (!Array) {
  const _component_TopBar = common_vendor.resolveComponent("TopBar");
  const _component_MyMap = common_vendor.resolveComponent("MyMap");
  const _component_NearbyPosition = common_vendor.resolveComponent("NearbyPosition");
  (_component_TopBar + _component_MyMap + _component_NearbyPosition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: $data.place.Title
    }),
    b: $data.place.Resource
  }, $data.place.Resource ? common_vendor.e({
    c: $data._const.baseURL + $data.place.Resource.CoverImages[0],
    d: $data.selectedID === 0 ? "#dfdfdf" : "#ffffff",
    e: common_vendor.o(($event) => $options.changeSelected(0)),
    f: $data.selectedID === 1 ? "#dfdfdf" : "#ffffff",
    g: common_vendor.o(($event) => $options.changeSelected(1)),
    h: $data.selectedID === 2 ? "#dfdfdf" : "#ffffff",
    i: common_vendor.o(($event) => $options.changeSelected(2)),
    j: $data.selectedID === 3 ? "#dfdfdf" : "#ffffff",
    k: common_vendor.o(($event) => $options.changeSelected(3)),
    l: $data.selectedID === 0
  }, $data.selectedID === 0 ? {
    m: common_vendor.t($data.place.Description)
  } : {}, {
    n: $data.selectedID === 1
  }, $data.selectedID === 1 ? {} : {}, {
    o: $data.selectedID === 2
  }, $data.selectedID === 2 ? {
    p: common_vendor.p({
      nearby_position: $data.nearbys
    })
  } : {}, {
    q: $data.selectedID === 3
  }, $data.selectedID === 3 ? {} : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a46a4f2b"]]);
wx.createPage(MiniProgramPage);
