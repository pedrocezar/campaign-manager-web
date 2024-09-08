import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getCampaignById, createCampaign, updateCampaign } from '../services/campaignService';

const CampaignForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: '',
    dateStart: '',
    dateEnd: '',
    status: '',
    category: ''
  });

  useEffect(() => {
    if (id) {
      fetchCampaign(id);
    }
  }, [id]);

  const fetchCampaign = async (id) => {
    const response = await getCampaignById(id);
    setCampaign(response.data);
  };

  const handleChange = (e) => {
    setCampaign({
      ...campaign,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCampaign(id, campaign);
    } else {
      await createCampaign(campaign);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={campaign.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Start Date"
        name="dateStart"
        type="date"
        value={campaign.dateStart.split('T')[0]}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        name="dateEnd"
        type="date"
        value={campaign.dateEnd.split('T')[0]}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Status"
        name="status"
        value={campaign.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        name="category"
        value={campaign.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button onClick={() => navigate(-1)} variant="outlined" style={{ marginRight: '10px' }}>Back</Button>
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </form>
  );
};

export default CampaignForm;
