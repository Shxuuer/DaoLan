"use strict";
const common_vendor = require("../../common/vendor.js");
const static_const = require("../../static/const.js");
const BottomBar = () => "../../components/BottomBar.js";
const _sfc_main = {
  data() {
    return {
      _const: static_const._const,
      schools: []
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
    common_vendor.index.request({
      url: static_const._const.baseURL + "/api/miniapp/home",
      data: {},
      success: (res) => {
        this.schools = res.data.Regions;
      },
      fail(res) {
        console.log(res);
      }
    });
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
        a: $data._const.baseURL + cell.Resource.CoverImages[0],
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
