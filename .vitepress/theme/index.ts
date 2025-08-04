// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import './style/index.css'
import HomeUnderline from "./components/HomeUnderline.vue"
// import "element-plus/dist/index.css";
import GLayout from "./GLayout.vue";
import Mycomponent from "./components/Mycomponent.vue"

export default {
  extends: DefaultTheme,
  Layout: GLayout,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Mycomponent' , Mycomponent)
    // 注册全局组件
    app.component('HomeUnderline' , HomeUnderline)
    // ...
  },
} satisfies Theme;
