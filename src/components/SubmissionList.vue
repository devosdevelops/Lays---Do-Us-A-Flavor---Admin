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
        @mark-winner="handleMarkWinner"
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

    <!-- Mark Winner Confirmation Modal -->
    <ModalConfirm
      v-if="showWinnerConfirm"
      title="Mark as Winner"
      message="Are you sure you want to mark this submission as the winner? Any previous winner will be unselected."
      confirmText="Mark as Winner"
      cancelText="Cancel"
      :isDangerous="false"
      @confirm="confirmMarkWinner"
      @cancel="showWinnerConfirm = false"
    />

    <!-- TODO: Implement pagination if submissions > 12 -->
    <!-- TODO: Implement filtering/sorting by votes, date, status -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SubmissionCard from './SubmissionCard.vue';
import SubmissionDetail from './SubmissionDetail.vue';
import ModalConfirm from './ModalConfirm.vue';
import { useAuth } from '../composables/useAuth.js';
import { getAllSubmissions, deleteSubmission, markSubmissionAsWinner } from '../services/api.js';

const props = defineProps({
  submissionsData: {
    type: Array,
    default: null
  }
});

const { token } = useAuth();
const fetchedSubmissions = ref([]);
const isLoading = ref(true);
let submissionToDelete = null;
let submissionToMarkWinner = null;
const selectedSubmission = ref(null);
const showDeleteConfirm = ref(false);
const showWinnerConfirm = ref(false);

const submissions = computed(() => {
  return props.submissionsData || fetchedSubmissions.value;
});

onMounted(async () => {
  isLoading.value = true;
  if (!props.submissionsData) {
    const data = await getAllSubmissions();
    fetchedSubmissions.value = Array.isArray(data) ? data : [];
  }
  isLoading.value = false;
});

const handleViewSubmission = (submission) => {
  selectedSubmission.value = submission;
};

const handleRemoveSubmission = (submission) => {
  submissionToDelete = submission;
  showDeleteConfirm.value = true;
};

const handleMarkWinner = (submission) => {
  submissionToMarkWinner = submission;
  showWinnerConfirm.value = true;
};

const confirmDelete = async () => {
  if (submissionToDelete) {
    const result = await deleteSubmission(submissionToDelete._id, token.value);
    if (result) {
      if (props.submissionsData) {
        const idx = props.submissionsData.indexOf(submissionToDelete);
        if (idx > -1) props.submissionsData.splice(idx, 1);
      } else {
        fetchedSubmissions.value = fetchedSubmissions.value.filter(s => s._id !== submissionToDelete._id);
      }
      showDeleteConfirm.value = false;
      submissionToDelete = null;
    }
  }
};

const confirmMarkWinner = async () => {
  if (submissionToMarkWinner) {
    const result = await markSubmissionAsWinner(submissionToMarkWinner._id, token.value);
    if (result) {
      // Reset hasWon on all submissions, then set it on the winner
      submissions.value.forEach(s => s.hasWon = false);
      const winnerIndex = submissions.value.findIndex(s => s._id === submissionToMarkWinner._id);
      if (winnerIndex !== -1) {
        submissions.value[winnerIndex].hasWon = true;
      }
      showWinnerConfirm.value = false;
      submissionToMarkWinner = null;
    }
  }
};
</script>
