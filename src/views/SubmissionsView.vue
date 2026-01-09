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
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ submissions.length }}</p>
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
        <SubmissionList :submissions-data="sortedSubmissions" />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/Layout.vue';
import SubmissionList from '../components/SubmissionList.vue';
import { getAllSubmissions } from '../services/api.js';

const submissions = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const data = await getAllSubmissions();
  submissions.value = Array.isArray(data) ? data : [];
  isLoading.value = false;
});

const avgVotes = computed(() => {
  if (submissions.value.length === 0) return 0;
  const total = submissions.value.reduce((sum, sub) => sum + (sub.voteCount || 0), 0);
  return Math.round(total / submissions.value.length);
});

const mostPopular = computed(() => {
  if (submissions.value.length === 0) return 0;
  return Math.max(...submissions.value.map(sub => sub.voteCount || 0));
});

const sortedSubmissions = computed(() => {
  return [...submissions.value].sort((a, b) => (b.voteCount || 0) - (a.voteCount || 0));
});
</script>
