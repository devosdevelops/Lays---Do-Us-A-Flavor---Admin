<template>
  <Layout>
    <template #content>
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Votes</h1>
          <p class="text-gray-600 mt-2">Track user votes and voting analytics</p>
        </div>

        <!-- Votes Analytics -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Total Votes</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ totalVotes }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Active Voters</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ activeVoters }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Avg Votes/User</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ avgVotesPerUser }}</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Highest Voted</h3>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ highestVoted }}</p>
          </div>
        </div>

        <!-- Vote Distribution by Submission -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-semibold text-gray-900 mb-4">Votes by Submission</h3>
          <div class="space-y-3">
            <div v-for="submission in mockSubmissions" :key="submission._id">
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">{{ submission.flavorName }}</span>
                <span class="text-sm font-bold text-gray-900">{{ submission.voteCount }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full"
                  :style="{ width: (submission.voteCount / highestVoted) * 100 + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import Layout from '../components/Layout.vue';
import { mockSubmissions } from '../utils/mock-data.js';

const totalVotes = computed(() => {
  return mockSubmissions.reduce((sum, sub) => sum + sub.voteCount, 0);
});

const activeVoters = computed(() => {
  return Math.round(totalVotes.value / 4.4);
});

const avgVotesPerUser = computed(() => {
  return (totalVotes.value / activeVoters.value).toFixed(1);
});

const highestVoted = computed(() => {
  return Math.max(...mockSubmissions.map(sub => sub.voteCount));
});
</script>
