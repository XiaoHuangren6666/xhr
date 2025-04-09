import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    financeRecords: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addFinanceRecord(state, record) {
      state.financeRecords.push(record);
    },
    setFinanceRecords(state, records) {
      state.financeRecords = records;
    },
  },
  actions: {
    async fetchFinanceRecords({ commit }, date) {
      const response = await fetch(`/api/finance?date=${date}`);
      const records = await response.json();
      commit('setFinanceRecords', records);
    },
    async registerUser({ commit }, userData) {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const user = await response.json();
      commit('setUser', user);
    },
    async loginUser({ commit }, credentials) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const user = await response.json();
      commit('setUser', user);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getFinanceRecords(state) {
      return state.financeRecords;
    },
  },
});

export default store;