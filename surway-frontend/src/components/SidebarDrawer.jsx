// import React from 'react';
// import { Box, Typography, Button, Menu, MenuItem, Switch, FormControlLabel, Radio, Divider } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import ImageIcon from '@mui/icons-material/Image';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import TableChartIcon from '@mui/icons-material/TableChart';
// import TuneIcon from '@mui/icons-material/Tune';
// import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// const SidebarDrawer = () => {
//   const [questionTypeAnchorEl, setQuestionTypeAnchorEl] = React.useState(null);
//   const [contentTypeAnchorEl, setContentTypeAnchorEl] = React.useState(null);

//   const handleQuestionTypeClick = (event) => {
//     setQuestionTypeAnchorEl(event.currentTarget);
//   };

//   const handleContentTypeClick = (event) => {
//     setContentTypeAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setQuestionTypeAnchorEl(null);
//     setContentTypeAnchorEl(null);
//   };

//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 'calc(100vh - 64px)', // Adjust height, minus the height of the toolbar
//         position: 'fixed',
//         top: '64px', // 64px is the height of the Toolbar
//         left: 0,
//         boxSizing: 'border-box',
//         overflowY: 'auto',
//         backgroundColor: '#f4f4f4', // Optional: Add background color
//         padding: 2,
//       }}
//     >
//       <Typography variant="h6">Edit Question</Typography>

//       <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
//         Question Type
//       </Typography>
//       <Button
//         variant="text"
//         endIcon={<ArrowDropDownIcon />}
//         onClick={handleQuestionTypeClick}
//         sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
//       >
//         Select Type
//       </Button>
//       <Menu
//         anchorEl={questionTypeAnchorEl}
//         open={Boolean(questionTypeAnchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} disableRipple>
//           <TextFieldsIcon sx={{ mr: 1 }} /> Multiple Choice
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <FormatListBulletedIcon sx={{ mr: 1 }} /> Text Entry
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <ImageIcon sx={{ mr: 1 }} /> Text / Graphic
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <TableChartIcon sx={{ mr: 1 }} /> Matrix Table
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <TuneIcon sx={{ mr: 1 }} /> Slider
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <DnsOutlinedIcon sx={{ mr: 1 }} /> Form Field
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <StarBorderIcon sx={{ mr: 1 }} /> Rank Order
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <SwapHorizIcon sx={{ mr: 1 }} /> Side by Side
//         </MenuItem>
//       </Menu>

//       <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
//         Content Type
//       </Typography>
//       <Button
//         variant="text"
//         endIcon={<ArrowDropDownIcon />}
//         onClick={handleContentTypeClick}
//         sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
//       >
//         Select Content Type
//       </Button>
//       <Menu
//         anchorEl={contentTypeAnchorEl}
//         open={Boolean(contentTypeAnchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} disableRipple>
//           <InsertDriveFileIcon sx={{ mr: 1 }} /> Text
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <ImageIcon sx={{ mr: 1 }} /> Image
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <DnsOutlinedIcon sx={{ mr: 1 }} /> Video
//         </MenuItem>
//       </Menu>

//       <Divider sx={{ my: 2 }} />

//       <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
//         Question Settings
//       </Typography>
//       <FormControlLabel
//         control={<Switch />}
//         label="Required Question"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Randomize Choices"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Allow Multiple Selections"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Limit Selections"
//       />
//     </Box>
//   );
// };

// export default SidebarDrawer;


// Sidebar.jsx
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

const Sidebar = () => {
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
        Select Question Type
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
