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
      types: ["1F", "2F", "3F", "4F", "5F"],
      nearbys: [],
      _const: static_const._const,
      mapScale: 1,
      mapTop: 320,
      // 地图顶部位置
      mapHeight: 800 - 320,
      // 地图高度
      pinWidth: 10,
      // 标点宽度
      pinHeight: 10,
      // 标点高度
      selectedItem: {
        // 自习区域
        positions: [
          { x: 104, y: 255 },
          { x: 253, y: 142 },
          { x: 820, y: 153 },
          { x: 768, y: 462 },
          { x: 215, y: 680 },
          { x: 980, y: 711 },
          { x: 716, y: 948 },
          { x: 775, y: 1247 }
        ]
      },
      mapCorners: {
        topLeft: { x: 0, y: 0 },
        topRight: { x: 0, y: 0 },
        bottomLeft: { x: 0, y: 0 },
        bottomRight: { x: 0, y: 0 }
      },
      id: ""
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
        "beacons": []
      },
      success: (res) => {
        console.log(res.data);
        this.nearbys = res.data.places;
      },
      fail(res) {
        console.log(res);
      }
    });
  },
  mounted() {
    this.getMapCorners();
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack(1);
    },
    onMapLoad(event) {
    },
    handleItemClicked(item) {
    },
    getMapCorners() {
    },
    getPinStyle(pos) {
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
  return {
    a: common_vendor.p({
      name: $data.name
    }),
    b: common_vendor.p({
      types: $data.types
    }),
    c: common_vendor.o((...args) => $options.onMapLoad && $options.onMapLoad(...args)),
    d: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    e: common_vendor.o($options.handleItemClicked),
    f: common_vendor.p({
      nearby_position: $data.nearbys,
      isInner: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c4865879"]]);
wx.createPage(MiniProgramPage);
