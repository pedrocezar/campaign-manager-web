import React, { useEffect, useState } from 'react';
import { getCampaignById } from '../services/campaignService';

const CampaignDetail = ({ match }) => {
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    loadCampaign();
  }, []);

  const loadCampaign = async () => {
    const result = await getCampaignById(match.params.id);
    setCampaign(result);
  };

  if (!campaign) return <div>Loading...</div>;

  return (
    <div>
      <h2>{campaign.name}</h2>
      <p>Start Date: {new Date(campaign.dateStart).toLocaleDateString()}</p>
      <p>End Date: {new Date(campaign.dateEnd).toLocaleDateString()}</p>
      <p>Status: {campaign.status}</p>
      <p>Category: {campaign.category}</p>
    </div>
  );
};

export default CampaignDetail;
