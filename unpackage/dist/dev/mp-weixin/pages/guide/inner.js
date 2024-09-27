"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
      nearby_position: [
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "图书馆",
          detail: "北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。"
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "图书馆",
          detail: "北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。"
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "图书馆",
          detail: "北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。"
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "图书馆",
          detail: "北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。"
        }
      ]
    };
  },
  onLoad: function(option) {
    this.name = option.name;
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
    d: common_vendor.p({
      nearby_position: $data.nearby_position,
      isInner: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c4865879"]]);
wx.createPage(MiniProgramPage);
