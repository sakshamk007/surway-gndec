import React, { useState } from 'react';
import { Box, Typography, Switch, RadioGroup, FormControlLabel, Radio, TextField, Divider } from '@mui/material';

const TextEntrySidebar = ({ onSettingsChange }) => {
  const [inputType, setInputType] = useState('single-line');
  const [addCharacterLimit, setAddCharacterLimit] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(0);
  const [validationType, setValidationType] = useState('');
  const [addValidation, setAddValidation] = useState(false);
  const [addRequirements, setAddRequirements] = useState(false);
  const handleInputTypeChange = (event) => {
    const newInputType = event.target.value;
    setInputType(newInputType);
    onSettingsChange({ inputType: newInputType });
  };

  const handleCharacterLimitChange = (event) => {
    const limit = event.target.value;
    setCharacterLimit(limit);
    onSettingsChange({ characterLimit: limit });
  };

  const handleValidationChange = (event) => {
    const validation = event.target.value;
    setValidationType(validation);
    onSettingsChange({ validationType: validation });
  };

  return (
    <Box sx={{mt: 2}}
      // sx={{
      //   width: 250,
      //   height: '100vh',
      //   padding: 2,
      //   borderRight: '1px solid lightgray',
      // }}
    >
      {/* <Typography variant="h6">Text Entry Settings</Typography> */}

      {/* Input Type */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Input Type
      </Typography>
      <RadioGroup value={inputType} onChange={handleInputTypeChange}>
        <FormControlLabel value="single-line" control={<Radio />} label="Single Line" />
        <FormControlLabel value="multi-line" control={<Radio />} label="Multi-Line" />
      </RadioGroup>

      {/* Character Limit */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Character Limit
      </Typography>
      <FormControlLabel
        control={<Switch checked={addCharacterLimit} onChange={() => setAddCharacterLimit(!addCharacterLimit)} />}
        label="Add Character Limit"
      />
      {addCharacterLimit && (
        <TextField
          type="number"
          label="Character Limit"
          value={characterLimit}
          onChange={handleCharacterLimitChange}
          fullWidth
          sx={{ mt: 1 }}
        />
      )}

      {/* Validation */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Validation
      </Typography>
      <FormControlLabel
        control={<Switch checked={addValidation} onChange={() => setAddValidation(!addValidation)} />}
        label="Add Validation"
      />
      {addValidation && (
        <RadioGroup value={validationType} onChange={handleValidationChange}>
          <FormControlLabel value="email" control={<Radio />} label="Email" />
          <FormControlLabel value="numeric" control={<Radio />} label="Numeric" />
          <FormControlLabel value="none" control={<Radio />} label="No Validation" />
        </RadioGroup>
      )}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Response Requirements
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={addRequirements}
            onChange={() => setAddRequirements(!addRequirements)}
          />
        }
        label="Add Requirements"
      />
    </Box>
  );
};

export default TextEntrySidebar;