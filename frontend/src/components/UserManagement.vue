<template>
  <div class="user-management">
    <h2>User Management</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
      <button type="button" @click="login">Login</button>
    </form>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/api/users/register', {
          username: this.username,
          password: this.password
        });
        this.message = response.data.message;
      } catch (error) {
        this.message = error.response.data.message || 'Registration failed';
      }
    },
    async login() {
      try {
        const response = await axios.post('/api/users/login', {
          username: this.username,
          password: this.password
        });
        this.message = response.data.message;
        // Handle successful login (e.g., redirect or store token)
      } catch (error) {
        this.message = error.response.data.message || 'Login failed';
      }
    }
  }
};
</script>

<style scoped>
.user-management {
  max-width: 400px;
  margin: auto;
}
</style>