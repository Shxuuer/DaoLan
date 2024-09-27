"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const BottomBar = () => "../../components/BottomBar.js";
const _sfc_main = {
  data() {
    return {
      _const: static_const._const,
      schools: [{
        ID: "123",
        Title: "北京邮电大学",
        Description: "这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮",
        Resource: {
          CoverImages: ["https://ts1.cn.mm.bing.net/th/id/R-C.d99db076401aecf04e4477010084fa67?rik=a49Hry%2bbPSjBWg&riu=http%3a%2f%2fwww.jdxzz.com%2fuploads%2fallimg%2f190719%2f8-1ZG9140J9.jpg&ehk=0AFrRzTQ3jFtqXOcGX3cCGmCCgQgwFaZFwxN65tirG4%3d&risl=&pid=ImgRaw&r=0"]
        }
      }]
    };
  },
  components: {
    BottomBar
  },
  methods: {
    handleClick(id, name) {
      common_vendor.index.navigateTo({
        url: `/pages/guide/nearby?id=${id}&name=${name}`
      });
    }
  },
  onLoad: function() {
    common_vendor.wx$1.hideHomeButton();
  }
};
if (!Array) {
  const _component_BottomBar = common_vendor.resolveComponent("BottomBar");
  _component_BottomBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.schools, (cell, index, i0) => {
      return {
        a: cell.Resource.CoverImages[0],
        b: common_vendor.t(cell.Title),
        c: common_vendor.t(cell.Description),
        d: common_vendor.o(($event) => $options.handleClick(cell.ID, cell.Title), index),
        e: index
      };
    }),
    b: common_vendor.p({
      selected: 1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eeb982f4"]]);
wx.createPage(MiniProgramPage);
