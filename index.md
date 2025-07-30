---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "药宁的MC服务器wiki"
  text: "和谐、纯净的生存服务器"
  tagline: 使用Folia服务端，带给玩家流畅的游戏体验
  actions:
    - theme: brand
      text: 游玩准备
      link: ./guides/
    - theme: alt
      text: 支持药宁
      link: https://space.bilibili.com/2128068100?spm_id_from=333.337.search-card.all.click
  image:
    src: /yaoning.png
    alt: yaoning

features:
  - title: 流畅游戏
    details: 采用Folia服务端，带给玩家极致流畅的游戏体验。
  - title: 兼容性强
    details: 兼容1.21.x全版本，无需重新配置mod。
  - title: 社群友好
    details: 管理员长期在线，及时响应。
  - title: 限制性小
    details: 允许使用部分作弊性mod。
---

## 图片展示

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

## 遇到问题？联系我们！

QQ群：1048595823

<script setup>
// import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';

//const previewSrcList = [
//  '/1.jpg',
//  '/2.jpg',
//  '/3.jpg',
//  '/4.jpg',
//  '/5.jpg',
//  '/6.jpg',
//];
</script>
