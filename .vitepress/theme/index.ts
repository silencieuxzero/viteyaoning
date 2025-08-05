// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import './style/index.css'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
// import "element-plus/dist/index.css";
import GLayout from "./GLayout.vue";
import { inBrowser } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: GLayout,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    // 注册全局组件
    app.component('HomeUnderline' , HomeUnderline)
    app.component('MouseClick' , MouseClick)
    app.component('MouseFollower' , MouseFollower)
    app.component('Linkcard' , Linkcard)
    // ...

    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
         NProgress.done() // 停止进度条
      }
    }
  },
} satisfies Theme;
