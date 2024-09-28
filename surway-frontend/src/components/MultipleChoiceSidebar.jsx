import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MultipleChoiceSidebar = () => {
  return (
    <Box>
      {/* Options Section - Specific to Multiple Choice */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Options
      </Typography>
      {/* Render Options (as example) */}
      <Button variant="outlined" startIcon={<AddIcon />} fullWidth sx={{ mt: 1 }}>
        Add Option
      </Button>
    </Box>
  );
};

export default MultipleChoiceSidebar;
