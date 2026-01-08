<template>
  <Layout>
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Votes</h1>
        <p class="text-gray-600 mt-2">Track user votes and voting analytics</p>
      </div>

      <!-- Votes Analytics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Total Votes</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">12,453</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Active Voters</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">2,847</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Avg Votes/User</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">4.4</p>
        </div>
      </div>

      <!-- Votes Table (TODO: Replace with real data) -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="font-semibold text-gray-900">Recent Votes</h3>
        </div>
        <div class="p-6 text-center text-gray-500">
          TODO: Add votes data from API
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
</script>
