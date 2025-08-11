---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: '/wty.jpg',
    name: 'wty',
    title: '服主',
    links: [
      { icon: 'maildotru', link: 'mailto:2459902380@qq.com' }
    ]
  },
  {
    avatar: '/yaoning.png',
    name: '药宁',
    title: 'UP主',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/2128068100?spm_id_from=333.337.0.0' },
      { icon: 'maildotru', link: 'mailto:1359174292@qq.com' }
    ]
  },
  {
    avatar: '/xinglan.jpg',
    name: '星蓝',
    title: 'UP主',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1396849646?spm_id_from=333.337.0.0' },
    ]
  },
  {
    avatar: '/mingze.jpg',
    name: '茗泽',
    title: '服务器配置文件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:1337679717@qq.com' }
    ]
  },
  {
    avatar: '/zhouzhou.jpg',
    name: '周周',
    title: '服务器内部事件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:3434792375@qq.com' }
    ]
  },
  {
    avatar: '/AblazeGod_GZ.jpg',
    name: 'AblazeGod_GZ',
    title: '服务器内部事件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:3808925388@qq.com' }
    ]
  },
  {
    avatar: '/apt.jpg',
    name: 'APT INSTALL',
    title: '服务器文档管理/内部事件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:rain_187103@outlook.com' }
    ]
  },
]
const qq = [
  {
    avatar: '/zhouzhou.jpg',
    name: '周周',
    title: '游戏内op',
    links: [

    ]
  },
]
const partners = [
  {
    avatar: '/vitepress-logo-large.svg',
    name: 'VitePress',
    title: '网站框架',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'maildotru', link: 'https://vitepress.dev/zh/' }
    ]
  },
    {
    avatar: '/gxdelogo.png',
    name: 'GXDE OS',
    title: '网页模板参考',
    links: [
      { icon: 'vitepress', link: 'https://www.gxde.top/' },
      { icon: 'gitee', link: 'https://gitee.com/GXDE-OS' },
      { icon: 'github', link: 'https://github.com/GXDE-OS' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>管理团队</template>
    <template #lead>感谢他们的贡献与服务。</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
    <VPTeamPageSection>
    <template #title>游戏内管理</template>
    <template #lead>急需完善</template>
    <template #members>
      <VPTeamMembers size="small" :members="qq" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>特别鸣谢</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<!-- <style src="/.vitepress/theme/ProfileCard.css"></style>
<div class="linkcard">
  <a href="https://vitepress.yiov.top/" target="_blank">
    <p class="description">茗泽<br><span>职务：服主</span><br><span>职务：服主</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://sm.ms/image/g4LrTQwGNzF9ekR" />
    </div>
  </a>
</div> 别删这段，不然以后不好调用，这段是卡片链接-->
<!--https://icon-sets.iconify.design/simple-icons/?keyword=sim vitepress默认图标库-->