import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Campaign Manager
        </Typography>
        <Button color="inherit" component={Link} to="/">Campaigns</Button>
        <Button color="inherit" component={Link} to="/create">Create Campaign</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
