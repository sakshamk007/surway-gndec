import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Surway
      </Typography>
      <Typography variant="body1" paragraph>
        Create and manage surveys easily.
      </Typography>
      <Button variant="contained" color="primary" href="/survey-builder">
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
