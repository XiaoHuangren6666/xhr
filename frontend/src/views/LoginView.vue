<template>
  <div class="login-view">
    <h1>登录</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">用户名:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
    <p>还没有账户？<router-link to="/register">注册</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$http.post('/api/login', {
          username: this.username,
          password: this.password
        });
        // 处理登录成功逻辑，例如保存token
        console.log('登录成功:', response.data);
      } catch (error) {
        console.error('登录失败:', error);
      }
    }
  }
};
</script>

<style scoped>
.login-view {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>