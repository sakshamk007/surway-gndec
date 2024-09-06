import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ScrollableTabs from '../components/ScrollableTabs';

const SurveyBuilder = () => {
  return (
    <Box sx={{textAlign: 'center' }}>
      <ScrollableTabs />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4">
          Survey Builder
        </Typography>
      </Box>
      <Button variant="contained" color="primary">
        Create a New Survey
      </Button>
      
    </Box>
  );
};

export default SurveyBuilder;
