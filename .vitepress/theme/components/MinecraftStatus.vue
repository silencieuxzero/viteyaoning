<template>
  <div class="server-status">
    <div v-if="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <h3>{{ serverAddress }}</h3>
      <p>在线玩家: <strong>{{ players.online }}/{{ players.max }}</strong></p>
      <div v-if="players.list && players.list.length">
        <p>玩家列表:</p>
        <ul>
          <li v-for="player in players.list" :key="player">{{ player }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    serverAddress: {
      type: String,
      default: 'mc.hypixel.net' // 默认服务器地址
    }
  },
  setup(props) {
    const players = ref({ online: 0, max: 0 })
    const loading = ref(true)
    const error = ref(null)
    let intervalId = null

    const fetchData = async () => {
      try {
        loading.value = true
        const res = await fetch(`/api/mc-server?address=${props.serverAddress}`)
        const data = await res.json()
        
        if (data.online) {
          players.value = {
            online: data.players.online,
            max: data.players.max,
            list: data.players.list || []
          }
        } else {
          error.value = '服务器离线'
        }
      } catch (err) {
        error.value = '获取数据失败'
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchData()
      // 每30秒更新一次
      intervalId = setInterval(fetchData, 30000)
    })

    onBeforeUnmount(() => {
      clearInterval(intervalId)
    })

    return { players, loading, error }
  }
}
</script>

<style scoped>
.server-status {
  padding: 1rem;
  border: 1px solid #eaecef;
  border-radius: 8px;
  margin: 1rem 0;
}

.error {
  color: #f56c6c;
}
</style>