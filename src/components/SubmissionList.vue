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
import { ref } from 'vue';
import SubmissionCard from './SubmissionCard.vue';
import SubmissionDetail from './SubmissionDetail.vue';
import ModalConfirm from './ModalConfirm.vue';
import { mockSubmissions } from '../utils/mock-data.js';

const submissions = ref([...mockSubmissions]);
const selectedSubmission = ref(null);
const showDeleteConfirm = ref(false);
let submissionToDelete = null;

const handleViewSubmission = (submission) => {
  selectedSubmission.value = submission;
};

const handleRemoveSubmission = (submission) => {
  submissionToDelete = submission;
  showDeleteConfirm.value = true;
};

const confirmDelete = async () => {
  if (submissionToDelete) {
    // TODO: Call API DELETE /api/submissions/:id
    // TODO: Handle authentication token
    console.log('Deleting submission:', submissionToDelete._id);
    
    // Remove from local list for now
    submissions.value = submissions.value.filter(s => s._id !== submissionToDelete._id);
  }
  
  showDeleteConfirm.value = false;
  selectedSubmission.value = null;
};
</script>
