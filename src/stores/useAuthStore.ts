import { defineStore } from 'pinia';
import { ref } from 'vue';

// Auth store：示範登入狀態控制
export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref<boolean>(false);

  const login = () => {
    isAuthenticated.value = true;
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    login,
    logout
  };
});
