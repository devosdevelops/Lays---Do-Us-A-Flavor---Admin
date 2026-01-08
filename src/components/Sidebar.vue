<template>
  <aside class="w-64 bg-gray-900 text-white shadow-lg hidden md:flex flex-col">
    <!-- Logo Section -->
    <div class="p-6 border-b border-gray-700">
      <h1 class="text-2xl font-bold">Lay's Admin</h1>
      <p class="text-gray-400 text-sm mt-1">Do Us A Flavor</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-2">
      <router-link
        to="/dashboard"
        class="block px-4 py-3 rounded-md text-gray-100 hover:bg-gray-800 transition"
        :class="{ 'bg-indigo-600': isActive('/dashboard') }"
      >
        📊 Dashboard
      </router-link>

      <router-link
        to="/dashboard/submissions"
        class="block px-4 py-3 rounded-md text-gray-100 hover:bg-gray-800 transition"
        :class="{ 'bg-indigo-600': isActive('/dashboard/submissions') }"
      >
        🎨 Submissions
      </router-link>

      <router-link
        to="/dashboard/users"
        class="block px-4 py-3 rounded-md text-gray-100 hover:bg-gray-800 transition"
        :class="{ 'bg-indigo-600': isActive('/dashboard/users') }"
      >
        👥 Users
      </router-link>

      <router-link
        to="/dashboard/votes"
        class="block px-4 py-3 rounded-md text-gray-100 hover:bg-gray-800 transition"
        :class="{ 'bg-indigo-600': isActive('/dashboard/votes') }"
      >
        🗳️ Votes
      </router-link>
    </nav>

    <!-- Logout -->
    <div class="p-4 border-t border-gray-700">
      <button
        @click="handleLogout"
        class="w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-md transition text-white font-medium"
        aria-label="Logout"
      >
        🚪 Logout
      </button>
      <!-- TODO: Implement real logout logic (clear token, redirect to login) -->
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth.js';

const route = useRoute();
const router = useRouter();
const { logout } = useAuth();

const isActive = (path) => {
  return route.path.startsWith(path);
};

const handleLogout = () => {
  logout();
  router.push('/login');
};
</script>
