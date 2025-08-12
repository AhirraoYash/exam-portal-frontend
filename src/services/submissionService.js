// In frontend/src/services/submissionService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'submissions/';

// Save a new test submission
const submitTest = async (submissionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, submissionData, config);
  return response.data;
};

// Get all submissions for the logged-in student
const getMySubmissions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'mysubmissions', config);
  return response.data;
};

const submissionService = {
  submitTest,
  getMySubmissions,
};

export default submissionService;