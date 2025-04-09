<template>
  <div class="register">
    <h1>注册</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">用户名:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">注册</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p>已有账户? <router-link to="/login">登录</router-link></p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const registerUser = async () => {
      try {
        await axios.post('/api/users/register', {
          username: username.value,
          email: email.value,
          password: password.value,
        });
        router.push('/login');
      } catch (error) {
        errorMessage.value = error.response.data.message || '注册失败，请重试';
      }
    };

    return {
      username,
      email,
      password,
      errorMessage,
      registerUser,
    };
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error {
  color: red;
}
</style>