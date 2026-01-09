<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Topbar -->
      <Topbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto">
        <div class="p-6">
          <slot name="content" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';

const sidebarOpen = ref(false);
</script>

