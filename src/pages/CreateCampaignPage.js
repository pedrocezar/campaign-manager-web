import React from 'react';
import CampaignForm from '../components/CampaignForm';

const CreateCampaignPage = ({ history }) => {
  return (
    <div>
      <h1>Create Campaign</h1>
      <CampaignForm history={history} />
    </div>
  );
};

export default CreateCampaignPage;
