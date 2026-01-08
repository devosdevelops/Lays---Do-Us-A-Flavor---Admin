<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
    <!-- Thumbnail -->
    <div class="relative w-full h-48 bg-gray-200 overflow-hidden">
      <img
        :src="submission.thumbnailUrl"
        :alt="submission.flavorName"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
      />
      <!-- Status Badge -->
      <div v-if="submission.isBanned" class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
        REMOVED
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-4">
      <!-- Flavor Name -->
      <h3 class="text-lg font-bold text-gray-900 truncate">{{ submission.flavorName }}</h3>

      <!-- Metadata Row -->
      <div class="flex items-center justify-between mt-3 text-sm text-gray-600">
        <div class="flex items-center space-x-2">
          <span>🗳️</span>
          <span class="font-semibold">{{ submission.voteCount }} votes</span>
        </div>
        <span
          class="px-3 py-1 rounded-full text-xs font-semibold"
          :class="{
            'bg-green-100 text-green-800': !submission.isBanned,
            'bg-red-100 text-red-800': submission.isBanned
          }"
        >
          {{ submission.isBanned ? 'Inactive' : 'Active' }}
        </span>
      </div>

      <!-- Design Details -->
      <div class="mt-3 space-y-1 text-xs text-gray-600">
        <div>
          <span class="font-semibold">Color:</span>
          <span class="inline-block ml-2 w-6 h-6 rounded border-2 border-gray-300" :style="{ backgroundColor: submission.bagColor }"></span>
        </div>
        <div>
          <span class="font-semibold">Font:</span>
          <span class="ml-2">{{ submission.fontChoice }}</span>
        </div>
        <div v-if="submission.keyFlavors && submission.keyFlavors.length">
          <span class="font-semibold">Key Flavors:</span>
          <div class="flex flex-wrap gap-1 mt-1">
            <span
              v-for="flavor in submission.keyFlavors"
              :key="flavor"
              class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs"
            >
              {{ flavor }}
            </span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-2 mt-4">
        <button
          @click="handleView"
          class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 rounded-md transition duration-200"
          aria-label="View submission details"
        >
          👁️ View
        </button>
        <button
          @click="handleRemove"
          class="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-md transition duration-200"
          aria-label="Remove submission"
        >
          🗑️ Remove
        </button>
      </div>
      <!-- TODO: Wire View to open SubmissionDetail modal/panel -->
      <!-- TODO: Wire Remove to show confirmation modal and call DELETE /api/submissions/:id -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  submission: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['view', 'remove']);

const handleView = () => {
  emit('view', submission);
  // TODO: Show SubmissionDetail component
};

const handleRemove = () => {
  emit('remove', submission);
  // TODO: Show confirmation modal, then call API to delete
};
