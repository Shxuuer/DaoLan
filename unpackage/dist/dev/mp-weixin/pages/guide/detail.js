"use strict";
const static_const = require("../../static/const.js");
const common_vendor = require("../../common/vendor.js");
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
      place: {
        ID: "1",
        Title: "图书馆",
        Resource: {
          CoverImages: ["https://ts1.cn.mm.bing.net/th/id/R-C.211e37dababa0991421d4de9ec64fab0?rik=6oBHvKLFxHnuNA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180531%2f3e700b36b785457088295f21f583adc7.jpeg&ehk=DrCzUw5Vlr6HWP%2bSVWCncq6VuufnDytKScUeqhlrxiY%3d&risl=&pid=ImgRaw&r=0"]
        },
        Description: "       北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（西土城校区图书馆1.55万平方米，沙河校区图书馆3.67万平方米。）馆员60余人，高级职称人员和研究生以上学历人员占一半以上；全馆共设综合办公室、资源建设部、文献借阅部（西土城）、文献借阅部（沙河）、情报服务部、技术支持部、知识产权服务中心7个部门。\n	学校图书馆建有千兆光纤接入、百兆到桌面的高性能网络支撑环境，实现了无线网服务全覆盖；采用先进的跨平台HTML5技术架构，建立了高性能的数字图书馆平台；自助借还书设备极大地方便了师生们对图书馆的利用；智慧图书馆服务导航系统实现实体图书馆与虚拟图书馆之间的互联互通,提供全面的、智能的信息服务感知平台,让读者随时、随地、随心发现并利用图书馆资源与服务。图书馆自主研发了“悦读书院”经典阅读实践教学系统平台、现代电子图书馆信息网络系统（MELINETS），建设了包括移动图书馆系统、数字图书馆联盟服务平台等在内的数字图书馆基础软件，实现了三个校区间图书的通借通还，方便三个校区之间学生借还图书。先进的技术设备、智能化的服务环境、书香校园文化和深层次的情报分析服务，使图书馆与师生学习环境、科研环境平滑对接，为读者建立了随时随地获得多方位信息服务的智慧图书馆服务。"
      },
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
  onLoad: function(option) {
    this.id = option.id;
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
    b: $data.place.Resource.CoverImages[0],
    c: $data.selectedID === 0 ? "#dfdfdf" : "#ffffff",
    d: common_vendor.o(($event) => $options.changeSelected(0)),
    e: $data.selectedID === 1 ? "#dfdfdf" : "#ffffff",
    f: common_vendor.o(($event) => $options.changeSelected(1)),
    g: $data.selectedID === 2 ? "#dfdfdf" : "#ffffff",
    h: common_vendor.o(($event) => $options.changeSelected(2)),
    i: $data.selectedID === 3 ? "#dfdfdf" : "#ffffff",
    j: common_vendor.o(($event) => $options.changeSelected(3)),
    k: $data.selectedID === 0
  }, $data.selectedID === 0 ? {
    l: common_vendor.t($data.place.Description)
  } : {}, {
    m: $data.selectedID === 1
  }, $data.selectedID === 1 ? {} : {}, {
    n: $data.selectedID === 2
  }, $data.selectedID === 2 ? {
    o: common_vendor.p({
      nearby_position: $data.nearbys
    })
  } : {}, {
    p: $data.selectedID === 3
  }, $data.selectedID === 3 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a46a4f2b"]]);
wx.createPage(MiniProgramPage);
