import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TextEntry = ({ settings }) => {
  const { inputType, characterLimit, validationType } = settings;
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    let newValue = event.target.value;
    if (characterLimit && newValue.length > characterLimit) {
      newValue = newValue.slice(0, characterLimit);
    }
    setValue(newValue);
  };

  const getValidationError = () => {
    if (validationType === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return 'Invalid email format';
    }
    if (validationType === 'numeric' && isNaN(value)) {
      return 'Must be a number';
    }
    return '';
  };

  return (
    <Box>
      {/* <Typography variant="h6">Text Entry</Typography> */}
      <TextField
        label="Enter your response"
        multiline={inputType === 'multi-line'}
        rows={inputType === 'multi-line' ? 4 : 1}
        value={value}
        onChange={handleChange}
        error={!!getValidationError()}
        helperText={getValidationError()}
        fullWidth
      />
      {characterLimit && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          {value.length}/{characterLimit} characters
        </Typography>
      )}
    </Box>
  );
};

export default TextEntry;
