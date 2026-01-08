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
 * GET /api/admin/users (Admin Protected)
 */
export const getAllUsers = async (token) => {
  try {
    const response = await fetch(`${API_BASE}/api/admin/users`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (err) {
    console.error('Error fetching users:', err);
    return [];
  }
};

/**
 * Ban/Unban User (Admin)
 * POST /api/admin/users/:userId/ban (Admin Protected)
 */
export const banUser = async (userId, token, isBanned) => {
  try {
    const response = await fetch(`${API_BASE}/api/admin/users/${userId}/ban`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ isBanned })
    });
    if (!response.ok) throw new Error('Failed to ban user');
    return await response.json();
  } catch (err) {
    console.error('Error banning user:', err);
    return null;
  }
};

/**
 * Get All Submissions
 * GET /api/submissions (Public)
 */
export const getAllSubmissions = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/submissions`);
    if (!response.ok) throw new Error('Failed to fetch submissions');
    return await response.json();
  } catch (err) {
    console.error('Error fetching submissions:', err);
    return [];
  }
};

/**
 * Get User's Submissions
 * GET /api/submissions/my (Protected)
 */
export const getUserSubmissions = async (token) => {
  try {
    const response = await fetch(`${API_BASE}/api/submissions/my`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch user submissions');
    return await response.json();
  } catch (err) {
    console.error('Error fetching user submissions:', err);
    return [];
  }
};

/**
 * Create Submission
 * POST /api/submissions (Protected)
 */
export const createSubmission = async (token, submissionData) => {
  try {
    const response = await fetch(`${API_BASE}/api/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(submissionData)
    });
    if (!response.ok) throw new Error('Failed to create submission');
    return await response.json();
  } catch (err) {
    console.error('Error creating submission:', err);
    return null;
  }
};

/**
 */
export const createVote = async (token, submissionId) => {
  try {
    const response = await fetch(`${API_BASE}/api/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ submissionId })
    });
    if (!response.ok) throw new Error('Failed to create vote');
    return await response.json();
  } catch (err) {
    console.error('Error creating vote:', err);
    return null;
  }
};

/**
 * Get Votes for Submission
 * GET /api/votes/:submissionId (Public)
 */
export const getVotesForSubmission = async (submissionId) => {
  try {
    const response = await fetch(`${API_BASE}/api/votes/${submissionId}`);
    if (!response.ok) throw new Error('Failed to fetch votes');
    return await response.json();
  } catch (err) {
    console.error('Error fetching votes:', err);
    return null;
  }
};

/**
 * Get All Votes (Admin)
 * GET /api/votes (Admin Protected)
 */
export const getAllVotes = async (token) => {
  try {
    const response = await fetch(`${API_BASE}/api/votes`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch votes');
    return await response.json();
  } catch (err) {
    console.error('Error fetching votes:', err);
    return [];
  } submissionId, createdAt }
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
