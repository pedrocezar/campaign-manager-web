import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import CampaignDetail from './components/CampaignDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={CampaignsPage} />
        <Route path="/create" exact component={CreateCampaignPage} />
        <Route path="/campaigns/:id" component={CampaignDetail} />
      </Switch>
    </Router>
  );
};

export default App;
