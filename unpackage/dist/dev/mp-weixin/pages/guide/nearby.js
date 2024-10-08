"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const TopBar = () => "../../components/TopBar.js";
const NearbyPosition = () => "../../components/NearbyPosition.js";
const SelectGroup = () => "../../components/SelectGroup.js";
const MyMap = () => "../../components/MyMap.js";
const _sfc_main = {
  components: { TopBar, NearbyPosition, SelectGroup, MyMap },
  onLoad: function(option) {
    this.name = option.name;
    this.id = option.id;
    common_vendor.index.request({
      url: static_const._const.baseURL + "/api/miniapp/outdoor",
      method: "POST",
      data: {},
      success: (res) => {
        this.nearbys = res.data.Places;
        this.L_title = res.data.Region.Title;
        const temp = res.data.Region.Circle.split(",");
        this.L_latitude = Number(temp[0]);
        this.L_longitude = Number(temp[1]);
      },
      fail(res) {
        console.log(res);
      }
    });
  },
  data() {
    return {
      name: "",
      id: "",
      types: ["休闲区", "娱乐区", "学习区", "学习区", "学习区", "学习区"],
      _const: static_const._const,
      nearbys: [],
      L_title: "",
      L_latitude: "",
      L_longitude: ""
    };
  },
  methods: {},
  watch: {}
};
if (!Array) {
  const _component_TopBar = common_vendor.resolveComponent("TopBar");
  const _component_SelectGroup = common_vendor.resolveComponent("SelectGroup");
  const _component_MyMap = common_vendor.resolveComponent("MyMap");
  const _component_NearbyPosition = common_vendor.resolveComponent("NearbyPosition");
  (_component_TopBar + _component_SelectGroup + _component_MyMap + _component_NearbyPosition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $data.name
    }),
    b: common_vendor.p({
      types: $data.types
    }),
    c: common_vendor.p({
      L_title: $data.L_title,
      L_latitude: $data.L_latitude,
      L_longitude: $data.L_longitude
    }),
    d: common_vendor.p({
      nearby_position: $data.nearbys
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-48e115b9"]]);
wx.createPage(MiniProgramPage);
