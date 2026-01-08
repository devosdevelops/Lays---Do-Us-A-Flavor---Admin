<template>
  <Layout>
    <template #content>
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Users</h1>
          <p class="text-gray-600 mt-2">Manage user accounts and permissions</p>
        </div>

        <!-- User Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Total Users</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ mockUsers.length }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Active Users</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ activeUsers }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Banned Users</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ bannedUsers }}</p>
          </div>
        </div>

        <!-- Users List -->
        <UserList />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import Layout from '../components/Layout.vue';
import UserList from '../components/UserList.vue';
import { mockUsers } from '../utils/mock-data.js';

const activeUsers = computed(() => {
  return mockUsers.filter(u => !u.isBanned).length;
});

const bannedUsers = computed(() => {
  return mockUsers.filter(u => u.isBanned).length;
});
</script>
