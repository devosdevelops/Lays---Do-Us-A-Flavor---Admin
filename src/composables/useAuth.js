/**
 * Authentication Composable
 * Manages auth state, token storage, and login/logout logic
 */

import { ref, computed } from 'vue';

const token = ref(localStorage.getItem('auth_token') || null);
const user = ref(localStorage.getItem('auth_user') ? JSON.parse(localStorage.getItem('auth_user')) : null);
const isLoading = ref(false);
const error = ref(null);

export const useAuth = () => {
  const isAuthenticated = computed(() => !!token.value);

  const setAuth = (newToken, newUser) => {
    token.value = newToken;
    user.value = newUser;
    localStorage.setItem('auth_token', newToken);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
  };

  const clearAuth = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  };

  const login = async (email, password) => {
    isLoading.value = true;
    error.value = null;

    try {
      // Call login API endpoint
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      setAuth(data.token, data.user);
      return { success: true };
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    clearAuth();
  };

  return {
    token: computed(() => token.value),
    user: computed(() => user.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    login,
    logout,
    setAuth,
    clearAuth
  };
};
