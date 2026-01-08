<template>
  <Layout>
    <template #content>
      <div class="space-y-6">
        <!-- Page Header -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p class="text-gray-600 mt-2">Welcome to the Lay's "Do Us A Flavor" Admin Dashboard</p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="text-gray-500 text-sm font-medium">Total Submissions</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ totalSubmissions }}</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="text-gray-500 text-sm font-medium">Total Users</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ totalUsers }}</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="text-gray-500 text-sm font-medium">Total Votes</div>
            <div class="text-3xl font-bold text-gray-900 mt-2">{{ totalVotes }}</div>
          </div>
        </div>

        <!-- Submissions Section -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Recent Submissions</h2>
          <SubmissionList />
        </div>

        <!-- Users Section -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Users</h2>
          <UserList />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '../components/Layout.vue';
import SubmissionList from '../components/SubmissionList.vue';
import UserList from '../components/UserList.vue';

// TODO: Replace mock values with real API calls to fetch submissions and users
const totalSubmissions = ref(24);
const totalUsers = ref(156);
const totalVotes = ref(1240);
