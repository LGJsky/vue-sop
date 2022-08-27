<template>
  <div>
    home组件
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    logout() {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
      this.$message.success('已退出登录')
    },
  },
}
</script>

<style lang="less" scoped>
</style>