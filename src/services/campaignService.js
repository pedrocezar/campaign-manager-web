import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000/campaigns';

export const getCampaigns = () => axios.get(API_URL);
export const getCampaignById = (id) => axios.get(`${API_URL}/${id}`);
export const createCampaign = (campaign) => axios.post(API_URL, campaign);
export const updateCampaign = (id, campaign) => axios.put(`${API_URL}/${id}`, campaign);
export const deleteCampaign = (id) => axios.delete(`${API_URL}/${id}`);
