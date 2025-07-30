import { defineConfig } from "vitepress";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "药宁的MC服务器wiki",
  description:
    "和谐、纯净的生存服务器",
  head: [
    ["link", { rel: "icon", href: "/yaoning.png", type: "image/png" }],
    ["meta", { name: "darkreader-lock" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "游玩准备", link: "/guides/", activeMatch: "^/guides/" },
      { text: "管理团队", link: "/team/", activeMatch: "^/team/" },
      {
        text: "UP主的B站空间",
        link: "https://space.bilibili.com/2128068100?spm_id_from=333.337.search-card.all.click",
      },
    ],

    sidebar: [
      {
        text: "游玩准备",
        items: [
          { text: "准备工作", link: "/guides/" },
          { text: "注意事项", link: "/guides/warning" }
        ],
      },
      {
        text: "其他",
        items: [
          { text: "服规与群规", link: "/guides/rule" },
          { text: "服务器内设施与建筑", link: "/other/building" },
          { text: "生电注意事项", link: "/other/redstone" }
        ],
      },
      {
        text: "FAQ",
        items: [
          { text: "FAQ", link: "/faq/" }

        ],
      },
      {
        text: "药宁小故事",
        items: [
          { text: "系列1", link: "/yaoningstory/" },

        ],
      },
      {
        text: "管理团队",
        items: [
          { text: "管理团队", link: "/team/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/silencieuxzero/viteyaoning" },
      {
        icon: {
          svg: '<svg t="1726643547175" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3504" width="200" height="200"><path d="M512 1024C229.226667 1024 0 794.773333 0 512 0 229.226667 229.226667 0 512 0 794.773333 0 1024 229.226667 1024 512 1024 794.773333 794.773333 1024 512 1024ZM693.333333 458.666667C689.024 438.634667 682.666667 426.666667 682.666667 426.666667 682.666667 426.666667 682.944 397.333333 650.666667 330.666667 618.389333 264 522.666667 256 522.666667 256L512 256C512 256 416.277333 264 384 330.666667 351.722667 397.333333 352 426.666667 352 426.666667 352 426.666667 345.642667 438.634667 341.333333 458.666667 337.024 478.698667 341.333333 490.666667 341.333333 490.666667 341.333333 490.666667 286.656 546.421333 288 586.666667 289.344 626.912 299.221333 652.544 320 629.333333 340.778667 606.122667 341.333333 608 341.333333 608 341.333333 608 340.970667 625.333333 352 640 363.029333 654.666667 373.333333 661.333333 373.333333 661.333333 373.333333 661.333333 317.386667 689.034667 330.666667 725.333333 343.946667 761.632 384.874667 768.288 416 768 447.125333 767.712 512 746.666667 512 746.666667L522.666667 746.666667C522.666667 746.666667 587.541333 767.712 618.666667 768 649.792 768.288 690.72 761.632 704 725.333333 717.28 689.034667 661.333333 661.333333 661.333333 661.333333 661.333333 661.333333 671.637333 654.666667 682.666667 640 693.696 625.333333 693.333333 608 693.333333 608 693.333333 608 693.888 606.122667 714.666667 629.333333 735.445333 652.544 745.322667 626.912 746.666667 586.666667 748.010667 546.421333 693.333333 490.666667 693.333333 490.666667 693.333333 490.666667 697.642667 478.698667 693.333333 458.666667Z" p-id="3505"></path></svg>',
        },
        link: "/yaoningqunqq.jpg",
      },
    ],

    footer: {
      message:
        "本文档基于vitepress框架",
      copyright:
        "从GXDE官网修改而来",
    },

    logo: "/yaoning.png",
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        lastUpdatedText: "上次更新",
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        darkModeSwitchLabel: "主题",
        outlineTitle: "大纲",
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,

//  vite: {
//    plugins: [
//      AutoImport({
//        resolvers: [ElementPlusResolver()],
//      }),
//      Components({
//        resolvers: [ElementPlusResolver()],
//      }),
//    ],
//  },
});
