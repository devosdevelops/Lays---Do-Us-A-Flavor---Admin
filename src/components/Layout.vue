<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Topbar -->
      <Topbar />

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
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
</script>

</script>
