import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const SurveyBuilder = () => {
  return (
    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Survey Builder
      </Typography>
      <Typography variant="body1" paragraph>
        Here you can build your survey!
      </Typography>
      <Button variant="contained" color="primary">
        Create a New Survey
      </Button>
    </Box>
  );
};

export default SurveyBuilder;
