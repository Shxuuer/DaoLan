"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const TopBar = () => "../../components/TopBar.js";
const SelectGroup = () => "../../components/SelectGroup.js";
const NearbyPosition = () => "../../components/NearbyPosition.js";
const _sfc_main = {
  name: "inner",
  components: { TopBar, SelectGroup, NearbyPosition },
  data() {
    return {
      name: "",
      types: [],
      nearbys: [],
      _const: static_const._const,
      id: "",
      selectedFloorIndex: void 0,
      surfaces: [],
      imgHeight: 0
    };
  },
  onLoad: function(option) {
    this.name = option.name;
    this.id = option.id;
    common_vendor.index.request({
      url: static_const._const.baseURL + "/api/miniapp/indoor",
      method: "POST",
      data: {
        "placeId": this.id,
        "beacons": ["00000000-0000-0000-0000-000000000000"]
      },
      success: (res) => {
        this.types = Array.from({ length: res.data.surfaces.length }, (_, index) => `${index + 1}F`);
        this.selectedFloorIndex = 0;
        this.nearbys = res.data.places;
        this.surfaces = res.data.surfaces;
      },
      fail(res) {
        console.log(res);
      }
    });
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack(1);
    },
    handleFloorChange(tag) {
      this.selectedFloorIndex = this.types.indexOf(tag);
    },
    barHeight() {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#imageContain").boundingClientRect((data) => {
        this.imgHeight = data.top + data.height + 50;
      }).exec();
    }
  }
};
if (!Array) {
  const _component_TopBar = common_vendor.resolveComponent("TopBar");
  const _component_SelectGroup = common_vendor.resolveComponent("SelectGroup");
  const _component_NearbyPosition = common_vendor.resolveComponent("NearbyPosition");
  (_component_TopBar + _component_SelectGroup + _component_NearbyPosition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: $data.name
    }),
    b: common_vendor.o($options.handleFloorChange),
    c: common_vendor.p({
      types: $data.types,
      default: $data.selectedFloorIndex,
      ifCancel: false
    }),
    d: $data.selectedFloorIndex !== void 0
  }, $data.selectedFloorIndex !== void 0 ? {
    e: $data._const.imgURL + $data.surfaces[$data.selectedFloorIndex].resource.backgroundImage,
    f: common_vendor.o((...args) => $options.barHeight && $options.barHeight(...args))
  } : {}, {
    g: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    h: common_vendor.p({
      nearby_position: $data.nearbys,
      isInner: true
    }),
    i: $data.imgHeight + "px"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c4865879"]]);
wx.createPage(MiniProgramPage);
