<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="px-6 py-4 flex items-center justify-between">
      <!-- Left: Page Title -->
      <h2 class="text-xl font-semibold text-gray-900">
        {{ pageTitle }}
      </h2>

      <!-- Right: Search and User Actions -->
      <div class="flex items-center space-x-4">
        <!-- Search Input -->
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            class="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            aria-label="Search submissions"
          />
          <span class="absolute right-3 top-2.5 text-gray-400">🔍</span>
          <!-- TODO: Implement search functionality -->
        </div>

        <!-- User Menu (Placeholder) -->
        <button
          class="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          aria-label="User menu"
        >
          <span class="text-gray-700 text-sm">Admin</span>
          <span class="text-lg">👤</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pageTitle = computed(() => {
  const titles = {
    '/dashboard': 'Dashboard',
    '/dashboard/submissions': 'Submissions',
    '/dashboard/users': 'Users',
    '/dashboard/votes': 'Votes'
  };
  return titles[route.path] || 'Dashboard';
});
</script>

