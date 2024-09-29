import React, { useState, useEffect } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Checkbox, TextField } from '@mui/material';

const MultipleChoice = ({ mcqsettings }) => {
  const { answerType, choices } = mcqsettings;
  const [questionText, setQuestionText] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(Array(choices).fill(''));

  // Effect to reset selected options when answerType changes
  useEffect(() => {
    if (answerType === 'one-answer') {
      setSelectedOptions(Array(choices).fill('')); // Reset for radio buttons
    }
  }, [answerType, choices]);

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];

    if (answerType === 'one-answer') {
      // Reset all options and set the selected one
      newSelectedOptions.fill(''); 
      newSelectedOptions[index] = event.target.value;
    } else {
      // For multiple-answer, toggle the selected option
      if (event.target.checked) {
        newSelectedOptions[index] = event.target.value; // Add option if checked
      } else {
        newSelectedOptions[index] = ''; // Remove option if unchecked
      }
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <Box>
      {/* Input for Question Text */}
      <TextField
        label="Enter your question"
        variant="outlined"
        fullWidth
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Options */}
      <RadioGroup>
        {Array.from({ length: choices }).map((_, index) => (
          <FormControlLabel
            key={index}
            control={
              answerType === 'one-answer' ? (
                <Radio 
                  value={`Option ${index + 1}`} // Assigning a value based on the option index
                  checked={selectedOptions[index] === `Option ${index + 1}`} // Checking if selected
                  onChange={handleOptionChange(index)} 
                />
              ) : (
                <Checkbox 
                  value={`Option ${index + 1}`} // Assigning a value based on the option index
                  onChange={handleOptionChange(index)} 
                  checked={selectedOptions[index] !== ''} // Checking if selected
                />
              )
            }
            label={
              <TextField
                variant="outlined"
                onChange={handleOptionChange(index)}
                fullWidth
                sx={{ p: 1 }} // Increased padding
              />
            }
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default MultipleChoice;
