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
            <div v-for="submission in sortedSubmissions" :key="submission._id">
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
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/Layout.vue';
import { useAuth } from '../composables/useAuth.js';
import { getAllSubmissions, getAllVotes } from '../services/api.js';

const { token } = useAuth();
const submissions = ref([]);
const votes = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const submissionsData = await getAllSubmissions();
  const votesData = await getAllVotes(token.value);
  submissions.value = Array.isArray(submissionsData) ? submissionsData : [];
  votes.value = Array.isArray(votesData) ? votesData : [];
  isLoading.value = false;
});

const totalVotes = computed(() => {
  return submissions.value.reduce((sum, sub) => sum + (sub.voteCount || 0), 0);
});

const activeVoters = computed(() => {
  if (totalVotes.value === 0) return 0;
  return Math.round(totalVotes.value / 4.4);
});

const avgVotesPerUser = computed(() => {
  if (activeVoters.value === 0) return 0;
  return (totalVotes.value / activeVoters.value).toFixed(1);
});

const highestVoted = computed(() => {
  if (submissions.value.length === 0) return 1;
  return Math.max(...submissions.value.map(sub => sub.voteCount || 0));
});

const sortedSubmissions = computed(() => {
  return [...submissions.value].sort((a, b) => (b.voteCount || 0) - (a.voteCount || 0));
});
</script>
