<template>
  <div>
    <!-- Submission Count -->
    <p class="text-gray-600 text-sm mb-4">Showing {{ submissions.length }} submissions</p>

    <!-- Grid of Submission Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SubmissionCard
        v-for="submission in submissions"
        :key="submission._id"
        :submission="submission"
        @view="handleViewSubmission"
        @remove="handleRemoveSubmission"
      />
    </div>

    <!-- Submission Detail Panel (Right-side panel) -->
    <SubmissionDetail
      v-if="selectedSubmission"
      :submission="selectedSubmission"
      @close="selectedSubmission = null"
    />

    <!-- Delete Confirmation Modal -->
    <ModalConfirm
      v-if="showDeleteConfirm"
      title="Remove Submission"
      message="Are you sure you want to remove this submission? This action cannot be undone."
      confirmText="Remove"
      cancelText="Cancel"
      :isDangerous="true"
      @confirm="confirmDelete"
      @cancel="showDeleteConfirm = false"
    />

    <!-- TODO: Implement pagination if submissions > 12 -->
    <!-- TODO: Implement filtering/sorting by votes, date, status -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SubmissionCard from './SubmissionCard.vue';
import SubmissionDetail from './SubmissionDetail.vue';
import ModalConfirm from './ModalConfirm.vue';
import { useAuth } from '../composables/useAuth.js';
import { getAllSubmissions, deleteSubmission } from '../services/api.js';

const props = defineProps({
  submissionsData: {
    type: Array,
    default: null
  }
});

const { token } = useAuth();
const submissions = ref([]);
const isLoading = ref(true);
let submissionToDelete = null;
const selectedSubmission = ref(null);
const showDeleteConfirm = ref(false);

onMounted(async () => {
  isLoading.value = true;
  const data = await getAllSubmissions();
  submissions.value = Array.isArray(data) ? data : [];
  isLoading.value = false;
});

const handleViewSubmission = (submission) => {
  selectedSubmission.value = submission;
};

const handleRemoveSubmission = (submission) => {
  submissionToDelete = submission;
  showDeleteConfirm.value = true;
};

const confirmDelete = async () => {
  if (submissionToDelete) {
    const result = await deleteSubmission(submissionToDelete._id, token.value);
    if (result) {
      submissions.value = submissions.value.filter(s => s._id !== submissionToDelete._id);
      showDeleteConfirm.value = false;
      submissionToDelete = null;
    }
  }
};
</script>
