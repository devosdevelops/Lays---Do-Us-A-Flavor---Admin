<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">Admin Login</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Username Input -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {{ errorMessage }}
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Sign In
        </button>
      </form>

      <!-- TODO: Add real authentication logic (API call to POST /api/users/login) -->
      <!-- TODO: Store token in localStorage and redirect to dashboard on success -->
      <p class="text-center text-gray-600 text-sm mt-4">
        <a href="#" class="text-indigo-600 hover:underline">Forgot password?</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async () => {
  // TODO: Replace with real API call to POST /api/users/login
  // TODO: Validate credentials and handle errors
  console.log('Login attempt with:', { username: username.value, password: password.value });
  
  // Placeholder: redirect to dashboard (remove in real implementation)
  router.push('/dashboard');
};</script>