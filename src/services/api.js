/**
 * API Service Wrapper
 * 
 * Read API_and_DB_Documentation.md before implementing real calls
 * 
 * This module contains skeleton functions for all API endpoints.
 * TODO: Implement real fetch calls to backend
 * TODO: Handle authentication tokens and error responses
 * TODO: Add request/response logging
 */

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Health Check
 * GET /api/health
 * TODO: Implement real call
 */
export const checkHealth = async () => {
  console.log('TODO: Implement GET /api/health');
  return { status: 'ok' };
};

/**
 * User Registration
 * POST /api/users/register
 * TODO: Implement real call
 */
export const registerUser = async (username, email, password) => {
  console.log('TODO: Implement POST /api/users/register', { username, email });
  // Returns: { _id, username, email, createdAt }
};

/**
 * User Login
 * POST /api/users/login
 * TODO: Implement real call
 */
export const loginUser = async (username, password) => {
  console.log('TODO: Implement POST /api/users/login', { username });
  // Returns: { token, user: { _id, username, email, createdAt } }
};

/**
 * Get User Profile
 * GET /api/users/profile (Protected)
 * TODO: Implement real call
 */
export const getUserProfile = async (token) => {
  console.log('TODO: Implement GET /api/users/profile');
  // Returns: { _id, username, email, isBanned, createdAt }
};

/**
 * Get All Users (Admin)
 * GET /api/users (Admin Protected)
 * TODO: Implement real call
 */
export const getAllUsers = async (token) => {
  console.log('TODO: Implement GET /api/users');
  // Returns: Array of users
};

/**
 * Ban/Unban User (Admin)
 * PATCH /api/users/:id (Admin Protected)
 * TODO: Implement real call
 */
export const banUser = async (userId, token, isBanned) => {
  console.log('TODO: Implement PATCH /api/users/:id', { userId, isBanned });
};

/**
 * Get All Submissions
 * GET /api/submissions (Public)
 * TODO: Implement real call
 */
export const getAllSubmissions = async () => {
  console.log('TODO: Implement GET /api/submissions');
  // Returns: Array of submissions
};

/**
 * Get User's Submissions
 * GET /api/submissions/my (Protected)
 * TODO: Implement real call
 */
export const getUserSubmissions = async (token) => {
  console.log('TODO: Implement GET /api/submissions/my');
  // Returns: Array of user's submissions
};

/**
 * Create Submission
 * POST /api/submissions (Protected)
 * TODO: Implement real call
 */
export const createSubmission = async (token, submissionData) => {
  console.log('TODO: Implement POST /api/submissions', submissionData);
  // submissionData: { flavorName, bagColor, fontChoice, keyFlavors }
  // Returns: { _id, userId, flavorName, bagColor, fontChoice, keyFlavors, voteCount, createdAt, updatedAt }
};

/**
 * Delete Submission
 * DELETE /api/submissions/:id (Protected)
 * TODO: Implement real call
 */
export const deleteSubmission = async (submissionId, token) => {
  console.log('TODO: Implement DELETE /api/submissions/:id', { submissionId });
  // Returns: { message, _id }
};

/**
 * Create Vote
 * POST /api/votes (Protected)
 * TODO: Implement real call
 */
export const createVote = async (token, submissionId) => {
  console.log('TODO: Implement POST /api/votes', { submissionId });
  // Returns: { _id, userId, submissionId, createdAt }
};

/**
 * Get Votes for Submission
 * GET /api/votes/:submissionId (Public)
 * TODO: Implement real call
 */
export const getVotesForSubmission = async (submissionId) => {
  console.log('TODO: Implement GET /api/votes/:submissionId', { submissionId });
  // Returns: { submissionId, voteCount, createdAt, updatedAt }
};

/**
 * Get All Votes (Admin)
 * GET /api/votes (Admin Protected)
 * TODO: Implement real call
 */
export const getAllVotes = async (token) => {
  console.log('TODO: Implement GET /api/votes');
  // Returns: Array of votes
};

export default {
  API_BASE,
  checkHealth,
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
  banUser,
  getAllSubmissions,
  getUserSubmissions,
  createSubmission,
  deleteSubmission,
  createVote,
  getVotesForSubmission,
  getAllVotes
};
