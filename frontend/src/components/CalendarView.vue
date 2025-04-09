<template>
  <div>
    <h1>收支日历</h1>
    <calendar @date-selected="fetchFinanceRecords" />
    <div v-if="records.length">
      <h2>选择日期的收支记录</h2>
      <ul>
        <li v-for="record in records" :key="record.id">
          {{ record.projectName }} - {{ record.amount }} - {{ record.source }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>没有找到该日期的收支记录。</p>
    </div>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'; // 假设使用一个日历组件

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      records: [],
    };
  },
  methods: {
    async fetchFinanceRecords(date) {
      try {
        const response = await fetch(`/api/finance/records?date=${date}`);
        if (!response.ok) {
          throw new Error('网络响应不正常');
        }
        this.records = await response.json();
      } catch (error) {
        console.error('获取收支记录失败:', error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>