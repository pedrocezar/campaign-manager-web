import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import CampaignForm from './components/CampaignForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CampaignsPage />} />
        <Route path="/create" element={<CreateCampaignPage />} />
        <Route path="/campaigns/:id" element={<CampaignForm />} />
      </Routes>
    </Router>
  );
};

export default App;
