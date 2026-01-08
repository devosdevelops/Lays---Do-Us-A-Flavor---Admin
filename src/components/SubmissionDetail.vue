<template>
  <transition name="slide-fade">
    <div v-if="submission" class="fixed right-0 top-0 h-screen w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold text-gray-900">{{ submission.flavorName }}</h2>
        <button
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close submission details"
        >
          ✕
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Thumbnail -->
        <div>
          <img
            :src="submission.thumbnailUrl"
            :alt="submission.flavorName"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <!-- Flavor Name -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Flavor Name</label>
          <p class="text-lg text-gray-900">{{ submission.flavorName }}</p>
        </div>

        <!-- Votes -->
        <div class="bg-indigo-50 p-4 rounded-lg">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Total Votes</label>
          <p class="text-3xl font-bold text-indigo-600">{{ submission.voteCount }}</p>
        </div>

        <!-- Status -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Status</label>
          <span
            class="inline-block px-3 py-1 rounded-full text-sm font-semibold"
            :class="{
              'bg-green-100 text-green-800': !submission.isBanned,
              'bg-red-100 text-red-800': submission.isBanned
            }"
          >
            {{ submission.isBanned ? 'Removed' : 'Active' }}
          </span>
        </div>

        <!-- Bag Color -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Bag Color</label>
          <div class="flex items-center space-x-3">
            <div class="w-16 h-16 rounded border-2 border-gray-300" :style="{ backgroundColor: submission.bagColor }"></div>
            <p class="text-gray-900 font-mono">{{ submission.bagColor }}</p>
          </div>
        </div>

        <!-- Font Choice -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Font Choice</label>
          <p class="text-gray-900">{{ submission.fontChoice }}</p>
        </div>

        <!-- Key Flavors -->
        <div v-if="submission.keyFlavors && submission.keyFlavors.length">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Key Flavors</label>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="flavor in submission.keyFlavors"
              :key="flavor"
              class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              {{ flavor }}
            </span>
          </div>
        </div>

        <!-- Dates -->
        <div class="border-t border-gray-200 pt-4 space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Created</label>
            <p class="text-gray-900 text-sm">{{ formatDate(submission.createdAt) }}</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Last Updated</label>
            <p class="text-gray-900 text-sm">{{ formatDate(submission.updatedAt) }}</p>
          </div>
        </div>

        <!-- User ID -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">User ID</label>
          <p class="text-gray-900 text-sm font-mono">{{ submission.userId }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-2 pt-4 border-t border-gray-200">
          <button
            @click="handleViewUser"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-md transition duration-200"
          >
            View User Profile
          </button>
          <!-- TODO: Implement route to user profile -->
          
          <button
            @click="handleVote"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-md transition duration-200"
          >
            Vote for This Flavor
          </button>
          <!-- TODO: Implement POST /api/votes call -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  submission: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const handleViewUser = () => {
  // TODO: Navigate to user profile or show user details
  console.log('View user:', props.submission.userId);
};

const handleVote = async () => {
  // TODO: Call POST /api/votes with submission._id and token
  // TODO: Update vote count locally
  console.log('Vote on submission:', props.submission._id);
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
