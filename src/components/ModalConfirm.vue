<template>
  <transition name="modal-fade">
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <!-- Title -->
        <h3 class="text-lg font-bold text-gray-900 mb-2">{{ title }}</h3>

        <!-- Message -->
        <p class="text-gray-700 mb-6">{{ message }}</p>

        <!-- Action Buttons -->
        <div class="flex gap-3 justify-end">
          <button
            @click="handleCancel"
            class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold rounded-md transition"
          >
            {{ cancelText }}
          </button>
          <button
            @click="handleConfirm"
            :class="{
              'bg-red-600 hover:bg-red-700': isDangerous,
              'bg-blue-600 hover:bg-blue-700': !isDangerous
            }"
            class="px-4 py-2 text-white font-semibold rounded-md transition"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  isDangerous: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['confirm', 'cancel']);

const handleConfirm = () => {
  emit('confirm');
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
