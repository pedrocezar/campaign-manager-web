import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import { getCampaigns, deleteCampaign } from '../services/campaignService';
import { Link } from 'react-router-dom';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    const response = await getCampaigns();
    setCampaigns(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCampaign(id);
    fetchCampaigns();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Created</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Start</strong></TableCell>
            <TableCell><strong>End</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign._id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.category}</TableCell>
              <TableCell>{new Date(campaign.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>{new Date(campaign.dateStart).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(campaign.dateEnd).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to={`/campaigns/${campaign._id}`}
                  variant="outlined"
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(campaign._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignList;
