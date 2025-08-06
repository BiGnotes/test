<script setup>
import { ref, onMounted } from 'vue'

const userIp = ref('加载中...')

onMounted(async () => {
  try {
    const res = await fetch('/api/get-ip')
    const data = await res.json()
    userIp.value = data.ip || '无法获取IP'
  } catch (err) {
    userIp.value = '请求失败'
  }
})
</script>

<template>
  <div style="font-family: sans-serif; padding: 2rem;">
    <h1>欢迎使用 Vue + Vercel IP 获取示例</h1>
    <p>你的 IP 是：<strong>{{ userIp }}</strong></p>
  </div>
</template>
