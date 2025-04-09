<template>
  <div class="home">
    <h1>欢迎使用收支记录管理系统</h1>
    <p>在这里，您可以记录每天的收支情况，管理用户信息，并查看特定日期的收支记录。</p>
    <FinanceForm />
    <CalendarView />
    <UserManagement />
  </div>
</template>

<script>
import FinanceForm from '../components/FinanceForm.vue';
import CalendarView from '../components/CalendarView.vue';
import UserManagement from '../components/UserManagement.vue';

export default {
  name: 'HomeView',
  components: {
    FinanceForm,
    CalendarView,
    UserManagement
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px;
}
</style>