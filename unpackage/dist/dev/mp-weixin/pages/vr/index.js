"use strict";
const common_vendor = require("../../common/vendor.js");
const BottomBar = () => "../../components/BottomBar.js";
const SearchInput = () => "../../components/SearchInput.js";
const _sfc_main = {
  name: "VR",
  components: { BottomBar, SearchInput },
  data() {
    return {
      schools: [
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "北京邮电大学",
          ico: "https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png",
          id: 1
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "北京邮电大学",
          ico: "https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png",
          id: 2
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "北京邮电大学",
          ico: "https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png",
          id: 3
        },
        {
          pic: "https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0",
          name: "北京邮电大学",
          ico: "https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png",
          id: 4
        }
      ]
    };
  },
  methods: {
    handleSearch(input) {
      console.log(input);
    }
  },
  onLoad: function() {
    common_vendor.wx$1.hideHomeButton();
  }
};
if (!Array) {
  const _component_SearchInput = common_vendor.resolveComponent("SearchInput");
  const _component_BottomBar = common_vendor.resolveComponent("BottomBar");
  (_component_SearchInput + _component_BottomBar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleSearch),
    b: common_vendor.p({
      placeholder: "搜索位置"
    }),
    c: common_vendor.f($data.schools, (cell, index, i0) => {
      return {
        a: cell.pic,
        b: cell.ico,
        c: common_vendor.t(cell.name),
        d: index
      };
    }),
    d: common_vendor.p({
      selected: 2
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9dd02fd"]]);
wx.createPage(MiniProgramPage);
