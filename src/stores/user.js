import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    notifications: []
  }),
  actions: {
    login(user) {
      // 模拟登录请求
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = user;
          resolve();
        }, 1000);
      });
    },
    logout() {
      this.user = null;
    },
    notify(notification) {
      this.notifications.push(notification);
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    getNotifications: (state) => state.notifications
  }
});
