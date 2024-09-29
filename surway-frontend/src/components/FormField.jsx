import React from 'react';
import { TextField, Box } from '@mui/material';

const FormField = ({ settings }) => {
  const { question, handleQuestionTextChange } = settings;

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        fullWidth
        label="Form Field"
        variant="outlined"
        value={question.questionText}
        onChange={(e) => handleQuestionTextChange({ ...question, questionText: e.target.value })}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'orange' },
          },
        }}
      />
    </Box>
  );
};

export default FormField;
