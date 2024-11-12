"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const common_assets = require("../../common/assets.js");
const TopBar = () => "../../components/TopBar.js";
const SelectGroup = () => "../../components/SelectGroup.js";
const NearbyPosition = () => "../../components/NearbyPosition2.js";
const _sfc_main = {
  name: "inner",
  components: { TopBar, SelectGroup, NearbyPosition },
  beforeMount() {
    common_vendor.index.request({
      url: static_const._const.baseURL + "/api/miniapp/outdoor",
      method: "POST",
      data: {},
      success: (res) => {
        this.nearbys = res.data.Places;
      },
      fail(res) {
        console.log(res);
      }
    });
  },
  data() {
    return {
      name: "",
      types: ["1F", "2F", "3F", "4F", "5F"],
      nearbys: [],
      _const: static_const._const
    };
  },
  onLoad: function(option) {
    this.name = option.name;
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack(1);
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
    c: common_assets._imports_0,
    d: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    e: common_vendor.p({
      nearby_position: $data.nearbys,
      isInner: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c4865879"]]);
wx.createPage(MiniProgramPage);
