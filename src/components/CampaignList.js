import React, { useEffect, useState } from 'react';
import { getCampaigns, deleteCampaign } from '../services/campaignService';
import { Link } from 'react-router-dom';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    const result = await getCampaigns();
    setCampaigns(result);
  };

  const handleDelete = async (id) => {
    await deleteCampaign(id);
    loadCampaigns();
  };

  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign._id}>
            <Link to={`/campaigns/${campaign._id}`}>{campaign.name}</Link>
            <button onClick={() => handleDelete(campaign._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
