<template>
  <Layout>
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Submissions</h1>
        <p class="text-gray-600 mt-2">Manage all flavor submissions</p>
      </div>

      <!-- Submissions List -->
      <SubmissionList />
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import SubmissionList from '../components/SubmissionList.vue';
</script>
