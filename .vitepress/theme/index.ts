// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import './style/index.css'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
// import "element-plus/dist/index.css";
import GLayout from "./GLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: GLayout,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    // 注册全局组件
    app.component('HomeUnderline' , HomeUnderline)
    app.component('MouseClick' , MouseClick)
    app.component('MouseFollower' , MouseFollower)
    // ...
  },
} satisfies Theme;
