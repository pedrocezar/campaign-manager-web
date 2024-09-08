import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000';

export const getCampaigns = async () => {
  const response = await axios.get(`${API_URL}/campaigns`);
  return response.data;
};

export const getCampaignById = async (id) => {
  const response = await axios.get(`${API_URL}/campaigns/${id}`);
  return response.data;
};

export const createCampaign = async (data) => {
  const response = await axios.post(`${API_URL}/campaigns`, data);
  return response.data;
};

export const deleteCampaign = async (id) => {
  await axios.delete(`${API_URL}/campaigns/${id}`);
};
