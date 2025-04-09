<template>
  <div class="finance-form">
    <h2>记录收支情况</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="itemName">项目名:</label>
        <input type="text" v-model="itemName" required />
      </div>
      <div>
        <label for="amount">金额:</label>
        <input type="number" v-model="amount" required />
      </div>
      <div>
        <label for="source">来源:</label>
        <input type="text" v-model="source" required />
      </div>
      <button type="submit">保存</button>
    </form>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itemName: '',
      amount: '',
      source: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/finance', {
          itemName: this.itemName,
          amount: this.amount,
          source: this.source
        });
        this.message = '收支记录已保存！';
        this.resetForm();
      } catch (error) {
        this.message = '保存失败，请重试。';
      }
    },
    resetForm() {
      this.itemName = '';
      this.amount = '';
      this.source = '';
    }
  }
};
</script>

<style scoped>
.finance-form {
  max-width: 400px;
  margin: auto;
}
.finance-form div {
  margin-bottom: 10px;
}
</style>