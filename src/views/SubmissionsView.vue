<template>
  <Layout>
    <template #content>
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Submissions</h1>
          <p class="text-gray-600 mt-2">Manage all flavor submissions</p>
        </div>

        <!-- Submission Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Total Submissions</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ mockSubmissions.length }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Average Votes</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ avgVotes }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Most Popular</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ mostPopular }}</p>
          </div>
        </div>

        <!-- Submissions List -->
        <SubmissionList />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import Layout from '../components/Layout.vue';
import SubmissionList from '../components/SubmissionList.vue';
import { mockSubmissions } from '../utils/mock-data.js';

const avgVotes = computed(() => {
  const total = mockSubmissions.reduce((sum, sub) => sum + sub.voteCount, 0);
  return Math.round(total / mockSubmissions.length);
});

const mostPopular = computed(() => {
  return Math.max(...mockSubmissions.map(sub => sub.voteCount));
});
</script>
