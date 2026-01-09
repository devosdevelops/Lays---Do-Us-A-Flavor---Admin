<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
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

      <!-- Winner Badge -->
      <div v-if="submission.hasWon" class="mt-2 bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md text-sm font-semibold text-center">
        ⭐ WINNER
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
      <div class="flex gap-2 mt-4 flex-col">
        <div class="flex gap-2">
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
        <button
          @click="handleMarkWinner"
          :class="{
            'bg-yellow-500 hover:bg-yellow-600': !submission.hasWon,
            'bg-gray-400 cursor-not-allowed': submission.hasWon
          }"
          class="w-full text-white font-semibold py-2 px-3 rounded-md transition duration-200"
          :disabled="submission.hasWon"
          aria-label="Mark submission as winner"
        >
          {{ submission.hasWon ? '✓ Winner' : '⭐ Make Winner' }}
        </button>
      </div>
      <!-- TODO: Wire View to open SubmissionDetail modal/panel -->
      <!-- TODO: Wire Remove to show confirmation modal and call DELETE /api/submissions/:id -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  submission: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['view', 'remove', 'mark-winner']);

const handleView = () => {
  emit('view', props.submission);
};

const handleRemove = () => {
  emit('remove', props.submission);
};

const handleMarkWinner = () => {
  emit('mark-winner', props.submission);
};
</script>

