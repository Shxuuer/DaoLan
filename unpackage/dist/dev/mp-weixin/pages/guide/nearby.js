"use strict";
const static_const = require("../../static/const.js");
const common_vendor = require("../../common/vendor.js");
const TopBar = () => "../../components/TopBar.js";
const NearbyPosition = () => "../../components/NearbyPosition.js";
const SelectGroup = () => "../../components/SelectGroup.js";
const MyMap = () => "../../components/MyMap.js";
const _sfc_main = {
  components: { TopBar, NearbyPosition, SelectGroup, MyMap },
  onLoad: function(option) {
    this.name = option.name;
    this.id = option.id;
  },
  data() {
    return {
      name: "",
      id: "",
      types: ["休闲区", "娱乐区", "学习区", "学习区", "学习区", "学习区"],
      latitude: "",
      longitude: "",
      _const: static_const._const,
      nearbys: [{
        ID: "1",
        Title: "图书馆",
        Resource: {
          CoverImages: ["https://ts1.cn.mm.bing.net/th/id/R-C.211e37dababa0991421d4de9ec64fab0?rik=6oBHvKLFxHnuNA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180531%2f3e700b36b785457088295f21f583adc7.jpeg&ehk=DrCzUw5Vlr6HWP%2bSVWCncq6VuufnDytKScUeqhlrxiY%3d&risl=&pid=ImgRaw&r=0"]
        },
        Description: "这是北邮的图书馆"
      }]
    };
  },
  methods: {},
  watch: {
    // longitude(newl, oldl) {
    // 	if (newl === "") return
    // 	uni.request({
    // 		method: 'POST',
    // 		url: _const.baseURL + 'api/miniapp/outdoor',
    // 		data: {
    // 			"Acc": 10,
    // 			"Beacons": [
    // 				"1:2:3"
    // 			],
    // 			"Lng": this.longitude,
    // 			"Lat": this.latitude
    // 		},
    // 		success: (res) => {
    // 			this.nearbys = res.data.Places
    // 		}
    // 	});
    // }
  }
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
    c: common_vendor.o(($event) => $data.longitude = $event),
    d: common_vendor.o(($event) => $data.latitude = $event),
    e: common_vendor.p({
      longitude: $data.longitude,
      latitude: $data.latitude
    }),
    f: common_vendor.p({
      nearby_position: $data.nearbys
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-48e115b9"]]);
wx.createPage(MiniProgramPage);
