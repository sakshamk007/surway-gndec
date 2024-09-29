import React, { useState } from 'react';
import { Box, Typography, Switch, RadioGroup, FormControlLabel, Radio, TextField, Divider } from '@mui/material';

const MultipleChoiceSidebar = ({ onmcqSettingsChange }) => {
  const [answerType, setAnswerType] = useState('one-answer');
  const [numChoices, setNumChoices] = useState(2); // Initial number of choices

  const handleAnswerTypeChange = (event) => {
    const newAnswerType = event.target.value;
    setAnswerType(newAnswerType);
    onmcqSettingsChange({ answerType: newAnswerType });
  };

  const handleNumChoicesChange = (event) => {
    const newNumChoices = Math.max(0, Number(event.target.value)); // Prevent negative values
    setNumChoices(newNumChoices);
    onmcqSettingsChange({ choices: newNumChoices });
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Answer Type */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Answer Type
      </Typography>
      <RadioGroup value={answerType} onChange={handleAnswerTypeChange}>
        <FormControlLabel value="one-answer" control={<Radio />} label="Single Answer" />
        <FormControlLabel value="multiple-answers" control={<Radio />} label="Multiple Answers" />
      </RadioGroup>

      {/* Number of Choices */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold">
        Number of Choices
      </Typography>
      <TextField
        type="number"
        label="Choices"
        value={numChoices}
        onChange={handleNumChoicesChange}
        fullWidth
        sx={{ mt: 1 }}
      />
    </Box>
  );
};

export default MultipleChoiceSidebar;
