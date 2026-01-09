<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="px-6 py-4 flex items-center justify-between">
      <!-- Left: Page Title (clickable on mobile to toggle sidebar) -->
      <button
        @click="$emit('toggle-sidebar')"
        class="text-xl font-semibold text-gray-900 md:cursor-default hover:md:bg-transparent hover:bg-gray-100 px-2 py-1 rounded transition md:hover:bg-transparent"
        aria-label="Toggle sidebar on mobile"
      >
        {{ pageTitle }}
      </button>

      <!-- Right: User Actions -->
      <div class="flex items-center space-x-4">
        <!-- User Menu -->
        <div class="relative">
          <button
            @click="userMenuOpen = !userMenuOpen"
            class="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition"
            aria-label="User menu"
          >
            <span class="text-gray-700 text-sm">Admin</span>
            <span class="text-lg">👤</span>
          </button>

          <!-- Logout Dropdown -->
          <div
            v-if="userMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
          >
            <button
              @click="handleLogout"
              class="w-full text-left px-4 py-3 hover:bg-gray-100 transition text-red-600 font-medium rounded-md"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth.js';

const route = useRoute();
const router = useRouter();
const { logout } = useAuth();
const userMenuOpen = ref(false);

const pageTitle = computed(() => {
  const titles = {
    '/dashboard': 'Dashboard',
    '/dashboard/submissions': 'Submissions',
    '/dashboard/users': 'Users',
    '/dashboard/votes': 'Votes'
  };
  return titles[route.path] || 'Dashboard';
});

const handleLogout = () => {
  logout();
  router.push('/login');
};

defineEmits(['toggle-sidebar']);
</script>

