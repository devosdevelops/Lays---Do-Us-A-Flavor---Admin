<template>
  <Layout>
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Users</h1>
        <p class="text-gray-600 mt-2">Manage user accounts and permissions</p>
      </div>

      <!-- Users List -->
      <UserList />
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import UserList from '../components/UserList.vue';
</script>
