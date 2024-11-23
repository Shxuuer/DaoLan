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
      nearbys: [],
      L_title: "",
      L_latitude: "",
      L_longitude: ""
    };
  },
  onLoad: function(option) {
    this.id = option.id;
    this.name = option.name;
    common_vendor.index.request({
      method: "GET",
      url: static_const._const.baseURL + "/api/miniapp/place/" + option.id,
      data: {},
      success: (res) => {
        this.place = res.data.place;
        this.nearbys = res.data.nearby;
        this.L_title = res.data.place.title;
        const temp = res.data.place.location.split(",");
        this.L_latitude = Number(temp[0]);
        this.L_longitude = Number(temp[1]);
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
      name: $data.place.title
    }),
    b: $data.place.resource
  }, $data.place.resource ? common_vendor.e({
    c: $data._const.imgURL + $data.place.resource.coverImages,
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
    m: common_vendor.t($data.place.description)
  } : {}, {
    n: $data.selectedID === 1
  }, $data.selectedID === 1 ? {
    o: common_vendor.p({
      L_title: $data.L_title,
      L_latitude: $data.L_latitude,
      L_longitude: $data.L_longitude,
      height: "50vh"
    })
  } : {}, {
    p: $data.selectedID === 2
  }, $data.selectedID === 2 ? {
    q: common_vendor.p({
      nearby_position: $data.nearbys
    })
  } : {}, {
    r: $data.selectedID === 3
  }, $data.selectedID === 3 ? {} : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a46a4f2b"]]);
wx.createPage(MiniProgramPage);
