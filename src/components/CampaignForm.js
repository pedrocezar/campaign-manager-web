import React, { useState } from 'react';
import { createCampaign } from '../services/campaignService';

const CampaignForm = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateStart: '',
    dateEnd: '',
    category: '',
    status: 'active'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCampaign(formData);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Campaign Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateStart"
        placeholder="Start Date"
        value={formData.dateStart}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateEnd"
        placeholder="End Date"
        value={formData.dateEnd}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default CampaignForm;
