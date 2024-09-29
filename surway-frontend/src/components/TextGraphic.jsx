import React from 'react';
import { TextField, Box } from '@mui/material';

const TextGraphic = ({ settings }) => {
  const { question, handleQuestionTextChange } = settings;

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        fullWidth
        label="Enter Text or Graphic URL"
        variant="outlined"
        value={question.questionText}
        onChange={(e) => handleQuestionTextChange({ ...question, questionText: e.target.value })}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'green' },
          },
        }}
      />
    </Box>
  );
};

export default TextGraphic;
