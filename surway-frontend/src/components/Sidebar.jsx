import React, { useState } from 'react';
import {
  Box, Typography, Button, Menu, MenuItem, FormControlLabel,
  Switch, RadioGroup, Radio, Divider, IconButton
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MultipleChoiceIcon from '@mui/icons-material/CheckBox';
import TextEntryIcon from '@mui/icons-material/TextFields';
import GraphicIcon from '@mui/icons-material/Image';
import MatrixIcon from '@mui/icons-material/GridOn';
import TuneIcon from '@mui/icons-material/Tune';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import RankOrderIcon from '@mui/icons-material/List';
import SideBySideIcon from '@mui/icons-material/ViewColumn';
import DisplayLogicIcon from '@mui/icons-material/Visibility';

const Sidebar = ({ selectedQuestionType }) => {
  const [questionTypeAnchorEl, setQuestionTypeAnchorEl] = useState(null);
  const [contentTypeAnchorEl, setContentTypeAnchorEl] = useState(null);
  const [addRequirements, setAddRequirements] = useState(false);
  
  // Open dropdowns
  const handleQuestionTypeClick = (event) => setQuestionTypeAnchorEl(event.currentTarget);
  const handleContentTypeClick = (event) => setContentTypeAnchorEl(event.currentTarget);
  
  // Close dropdowns
  const handleMenuClose = () => {
    setQuestionTypeAnchorEl(null);
    setContentTypeAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        overflowY: 'auto',
        padding: 2,
        borderRight: '1px solid lightgray',
      }}
    >
      <Typography variant="h6">
        Edit Question
      </Typography>

      {/* Question Type */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Question Type
      </Typography>
      <Button
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleQuestionTypeClick}
        fullWidth
        sx={{ mt: 1 }}
      >
        {selectedQuestionType ? selectedQuestionType : 'Select Question Type'}
      </Button>
      <Menu
        anchorEl={questionTypeAnchorEl}
        open={Boolean(questionTypeAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><MultipleChoiceIcon sx={{ mr: 1 }} /> Multiple Choice</MenuItem>
        <MenuItem onClick={handleMenuClose}><TextEntryIcon sx={{ mr: 1 }} /> Text Entry</MenuItem>
        <MenuItem onClick={handleMenuClose}><GraphicIcon sx={{ mr: 1 }} /> Text / Graphic</MenuItem>
        <MenuItem onClick={handleMenuClose}><MatrixIcon sx={{ mr: 1 }} /> Matrix Table</MenuItem>
        <MenuItem onClick={handleMenuClose}><TuneIcon sx={{ mr: 1 }} /> Slider</MenuItem>
        <MenuItem onClick={handleMenuClose}><DnsOutlinedIcon sx={{ mr: 1 }} /> Form Field</MenuItem>
        <MenuItem onClick={handleMenuClose}><RankOrderIcon sx={{ mr: 1 }} /> Rank Order</MenuItem>
        <MenuItem onClick={handleMenuClose}><SideBySideIcon sx={{ mr: 1 }} /> Side by Side</MenuItem>
      </Menu>

      {/* Content Type */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Content Type
      </Typography>
      <Button
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleContentTypeClick}
        fullWidth
        sx={{ mt: 1 }}
      >
        Select Content Type
      </Button>
      <Menu
        anchorEl={contentTypeAnchorEl}
        open={Boolean(contentTypeAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Text</MenuItem>
        <MenuItem onClick={handleMenuClose}>Graphic</MenuItem>
        <MenuItem onClick={handleMenuClose}>File</MenuItem>
      </Menu>

      {/* Response Requirements */}
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
        sx={{ mt: 1 }}
      />
      {addRequirements && (
        <RadioGroup>
          <FormControlLabel value="forced" control={<Radio />} label="Forced Response" />
          <FormControlLabel value="request" control={<Radio />} label="Request Response" />
        </RadioGroup>
      )}

      {/* Question Behaviour */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        Question Behaviour
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <DisplayLogicIcon sx={{ mr: 1 }} />
        <Typography variant="body2">Display Logic</Typography>
      </Box>

    </Box>
  );
};

export default Sidebar;


// import React, { useState } from 'react';
// import { Box, Typography, Button, Menu, MenuItem, FormControlLabel, Switch, RadioGroup, Radio } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import MultipleChoiceIcon from '@mui/icons-material/CheckBox';
// import TextEntryIcon from '@mui/icons-material/TextFields';
// import TextEntrySidebar from './TextEntrySidebar';  // Custom sidebar for TextEntry questions

// const Sidebar = ({ questionType, onSettingsChange }) => {
//   const [questionTypeAnchorEl, setQuestionTypeAnchorEl] = useState(null);

//   const handleMenuClose = () => {
//     setQuestionTypeAnchorEl(null);
//   };

//   return (
//     <Box sx={{ width: 250, height: '100vh', padding: 2, borderRight: '1px solid lightgray' }}>
//       <Typography variant="h6">Edit Question</Typography>

//       {/* Render different sidebars based on the question type */}
//       {questionType === 'text-entry' ? (
//         <TextEntrySidebar onSettingsChange={onSettingsChange} />
//       ) : (
//         <>
//           <Typography variant="subtitle1" fontWeight="bold" mt={2}>Question Type</Typography>
//           <Button
//             variant="outlined"
//             endIcon={<ArrowDropDownIcon />}
//             onClick={(event) => setQuestionTypeAnchorEl(event.currentTarget)}
//             fullWidth
//             sx={{ mt: 1 }}
//           >
//             Select Question Type
//           </Button>
//           <Menu
//             anchorEl={questionTypeAnchorEl}
//             open={Boolean(questionTypeAnchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}><MultipleChoiceIcon sx={{ mr: 1 }} /> Multiple Choice</MenuItem>
//             <MenuItem onClick={handleMenuClose}><TextEntryIcon sx={{ mr: 1 }} /> Text Entry</MenuItem>
//             {/* Add more menu items as needed */}
//           </Menu>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Sidebar;
