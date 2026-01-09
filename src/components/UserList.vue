<template>
  <div>
    <!-- User Count -->
    <p class="text-gray-600 text-sm mb-4">Total Users: {{ users.length }}</p>

    <!-- Responsive Table (Desktop) / Card List (Mobile) -->
    <div class="hidden md:block overflow-x-auto">
      <table class="w-full text-sm text-gray-900">
        <thead class="border-b border-gray-200 bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">Username</th>
            <th class="px-4 py-3 text-left font-semibold">Email</th>
            <th class="px-4 py-3 text-left font-semibold">Status</th>
            <th class="px-4 py-3 text-left font-semibold">Role</th>
            <th class="px-4 py-3 text-left font-semibold">Joined</th>
            <th class="px-4 py-3 text-center font-semibold">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="user in users"
            :key="user._id"
            class="hover:bg-gray-50 transition"
          >
            <td class="px-4 py-3 font-medium">{{ user.username }}</td>
            <td class="px-4 py-3 text-gray-600">{{ user.email }}</td>
            <td class="px-4 py-3">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                :class="{
                  'bg-green-100 text-green-800': !user.isBanned,
                  'bg-red-100 text-red-800': user.isBanned
                }"
              >
                {{ user.isBanned ? 'Banned' : 'Active' }}
              </span>
            </td>
            <td class="px-4 py-3">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                :class="{
                  'bg-purple-100 text-purple-800': user.isAdmin,
                  'bg-gray-100 text-gray-800': !user.isAdmin
                }"
              >
                {{ user.isAdmin ? 'Admin' : 'User' }}
              </span>
            </td>
            <td class="px-4 py-3 text-gray-600">
              {{ formatDate(user.createdAt) }}
            </td>
            <td class="px-4 py-3 text-center">
              <button
                @click="handleBanUser(user)"
                class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded transition"
                :disabled="user.isAdmin"
                :title="user.isAdmin ? 'Cannot ban admin users' : ''"
              >
                {{ user.isBanned ? 'Unban' : 'Ban' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Card View (Mobile) -->
    <div class="md:hidden space-y-4">
      <div
        v-for="user in users"
        :key="user._id"
        class="bg-gray-50 p-4 rounded-lg border border-gray-200"
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="font-semibold text-gray-900">{{ user.username }}</h4>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
          </div>
          <span
            class="inline-block px-2 py-1 rounded text-xs font-semibold"
            :class="{
              'bg-purple-100 text-purple-800': user.isAdmin,
              'bg-gray-100 text-gray-800': !user.isAdmin
            }"
          >
            {{ user.isAdmin ? 'Admin' : 'User' }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span
            class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
            :class="{
              'bg-green-100 text-green-800': !user.isBanned,
              'bg-red-100 text-red-800': user.isBanned
            }"
          >
            {{ user.isBanned ? 'Banned' : 'Active' }}
          </span>
          <button
            @click="handleBanUser(user)"
            class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded transition"
            :disabled="user.isAdmin"
          >
            {{ user.isBanned ? 'Unban' : 'Ban' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Ban Confirmation Modal -->
    <ModalConfirm
      v-if="showBanConfirm"
      :title="`${userToBan?.isBanned ? 'Unban' : 'Ban'} User`"
      :message="`Are you sure you want to ${userToBan?.isBanned ? 'unban' : 'ban'} ${userToBan?.username}? ${!userToBan?.isBanned ? 'They will not be able to login.' : 'They will be able to login again.'}`"
      :confirmText="userToBan?.isBanned ? 'Unban' : 'Ban'"
      cancelText="Cancel"
      :isDangerous="!userToBan?.isBanned"
      @confirm="confirmBan"
      @cancel="showBanConfirm = false"
    />

    <!-- TODO: Implement pagination if users > 20 -->
    <!-- TODO: Implement search/filter by username or email -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ModalConfirm from './ModalConfirm.vue';
import { useAuth } from '../composables/useAuth.js';
import { getAllUsers, banUser } from '../services/api.js';

const { token } = useAuth();
const users = ref([]);
const showBanConfirm = ref(false);
const isLoading = ref(true);
let userToBan = null;

onMounted(async () => {
  isLoading.value = true;
  const data = await getAllUsers(token.value);
  users.value = Array.isArray(data) ? data : [];
  isLoading.value = false;
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const handleBanUser = (user) => {
  userToBan = user;
  showBanConfirm.value = true;
};

const confirmBan = async () => {
  if (userToBan) {
    const newBanStatus = !userToBan.isBanned;
    const result = await banUser(userToBan._id, token.value, newBanStatus);
    
    if (result) {
      const userIndex = users.value.findIndex(u => u._id === userToBan._id);
      if (userIndex !== -1) {
        users.value[userIndex].isBanned = newBanStatus;
      }
    }
  }
  
  showBanConfirm.value = false;
  userToBan = null;
};
</script>
