import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        badge: {
          text: '1',
          type: 'info',
        },
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      }
    ]
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: 'https://cdn.deepseek.com/logo.png?x-image-process=image%2Fresize%2Cw_828',
        title: 'Deepseek',
        link: 'https://www.deepseek.com/'
      }
    ]
  },
  {
    title: '实用工具（MCwiki）',
    items: [
      {
        icon: 'https://zh.minecraft.wiki/images/thumb/Impulse_Command_Block_JE5_BE2.png/120px-Impulse_Command_Block_JE5_BE2.png?d501c',
        title: '坐标转换器',
        desc: '下界与主世界坐标转换器',
        link: 'https://zh.minecraft.wiki/w/%E8%AE%A1%E7%AE%97%E5%99%A8/%E4%B8%8B%E7%95%8C%E5%9D%90%E6%A0%87'
      },
      {
        icon: 'https://zh.minecraft.wiki/images/thumb/Impulse_Command_Block_JE5_BE2.png/120px-Impulse_Command_Block_JE5_BE2.png?d501c',
        title: '运输计算器',
        desc: '计算两点之间的距离、方向角和预计到达时间',
        link: 'https://zh.minecraft.wiki/w/%E8%AE%A1%E7%AE%97%E5%99%A8/%E8%BF%90%E8%BE%93%E8%AE%A1%E7%AE%97%E5%99%A8'
      },
      {
        icon: 'https://zh.minecraft.wiki/images/thumb/Impulse_Command_Block_JE5_BE2.png/120px-Impulse_Command_Block_JE5_BE2.png?d501c',
        title: '伤害减免计算器',
        desc: '计算不同盔甲、魔咒、抗性提升状态效果对不同伤害的减免。',
        link: 'https://zh.minecraft.wiki/w/%E8%AE%A1%E7%AE%97%E5%99%A8/%E4%BC%A4%E5%AE%B3%E5%87%8F%E5%85%8D'
      },
      {
        icon: 'https://zh.minecraft.wiki/images/thumb/Impulse_Command_Block_JE5_BE2.png/120px-Impulse_Command_Block_JE5_BE2.png?d501c',
        title: '时刻计算器',
        desc: '在游戏刻、红石刻与现实时间间转换',
        link: 'https://zh.minecraft.wiki/w/%E8%AE%A1%E7%AE%97%E5%99%A8/%E5%88%BB'
      }
    ]
  }
]