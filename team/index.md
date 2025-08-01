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
    avatar: '/mingze.jpg',
    name: '茗泽',
    title: '服主',
    links: [
      { icon: 'maildotru', link: 'mailto:1337679717@qq.com' }
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
    avatar: '/canglang.jpg',
    name: '沧浪',
    title: '服务器后台配置文件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:930941666@qq.com' }
    ]
  },
  {
    avatar: '/muxi.jpg',
    name: '慕曦',
    title: '服务器内部事件管理',
    links: [
      { icon: 'maildotru', link: 'mailto:1542539885@qq.com' }
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
    avatar: '/apt.jpg',
    name: 'APT INSTALL',
    title: '服务器文档管理',
    links: [
      { icon: 'maildotru', link: 'mailto:rain_187103@outlook.com' }
    ]
  },
]
const qq = [
  {
    avatar: '/伊蕾娜.jpg',
    name: '天王',
    title: '四代目火影',
    links: [

    ]
  },
  {
    avatar: '/bocchi.jpg',
    name: 'bocchi',
    title: '群波奇',
    links: [

    ]
  },
  {
    avatar: '/999.jpg',
    name: '三玖',
    title: '佳宝',
    links: [

    ]
  },
  {
    avatar: '/白菜.jpg',
    name: '白菜する',
    title: '药政王',
    links: [

    ]
  },
  {
    avatar: '/尘世.jpg',
    name: '尘世乱游',
    title: '试药员',
    links: [

    ]
  },
  {
    avatar: '/枫.jpg',
    name: '枫杺デス',
    title: '群聊管理员',
    links: [

    ]
  },
  {
    avatar: '/时鲤.jpg',
    name: '时理',
    title: '惨中人',
    links: [

    ]
  },
  {
    avatar: '/AAA.jpg',
    name: 'AAA异世界兽耳娘批发商',
    title: '武神之刃',
    links: [

    ]
  },
  {
    avatar: '/DD.jpg',
    name: 'Dd～',
    title: '药房老板',
    links: [

    ]
  },
  {
    avatar: '/star.jpg',
    name: '星河璀璨',
    title: '星河不可及',
    links: [

    ]
  },
  {
    avatar: '/zero.jpg',
    name: '归零之歌',
    title: '归零砭坊',
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
  },]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>管理团队</template>
    <template #lead>感谢他们的贡献与服务。</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
    <VPTeamPageSection>
    <template #title>Q群管理员</template>
    <template #lead>群抽象大师</template>
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
</div> 别删这段，不然以后不好调用-->
<!--https://icon-sets.iconify.design/simple-icons/?keyword=sim vitepress默认图标库-->