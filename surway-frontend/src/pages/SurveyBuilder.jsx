import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, TextField, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ScrollableTabs from '../components/ScrollableTabs';
import Sidebar from '../components/Sidebar';
import SurveyEditor from '../components/SurveyEditor';

const SurveyBuilder = () => {
  const { id } = useParams();  // Get project ID from the URL
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toolsMenuOpen, setToolsMenuOpen] = React.useState(false);
  const [importExportAnchorEl, setImportExportAnchorEl] = React.useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  
  const handleToolsClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToolsMenuOpen(true);
  };

  const handleToolsClose = () => {
    setAnchorEl(null);
    setToolsMenuOpen(false);
    setImportExportAnchorEl(null); // Ensure Import/Export menu is closed
  };

  const handleImportExportClick = (event) => {
    setImportExportAnchorEl(event.currentTarget);
  };

  const handleImportExportClose = () => {
    setImportExportAnchorEl(null);
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  // Handle adding a new question and selecting it by default
  const handleNewQuestionAdded = (newQuestion) => {
    setSelectedQuestion(newQuestion); // Set the new question as the selected one
  };

  const [mcqsettings, mcqsetSettings] = useState({
    answerType: 'one-answer',
    choices: 2
  });

  const handlemcqSettingsChange = (newSettings) => {
    mcqsetSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Section */}
      <Sidebar 
        selectedQuestionType={selectedQuestion?.questionType} 
        handlemcqSettingsChange={handlemcqSettingsChange}
      />

      {/* Main Content Section */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Scrollable Tabs */}
        <ScrollableTabs />

        {/* Navbar Section */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          {/* Left Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="text"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleToolsClick}
            >
              Tools
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={toolsMenuOpen}
              onClose={handleToolsClose}
              PaperProps={{
                sx: {
                  width: 200,
                },
              }}
            >
              <MenuItem onClick={handleToolsClose}>Auto-number questions</MenuItem>
              <MenuItem onClick={handleToolsClose}>Analyse Survey</MenuItem>
              <Divider />
              <MenuItem
                onClick={handleImportExportClick}
                aria-controls="import-export-menu"
                aria-haspopup="true"
              >
                Import/Export
              </MenuItem>
              <Menu
                id="import-export-menu"
                anchorEl={importExportAnchorEl}
                open={Boolean(importExportAnchorEl)}
                onClose={handleImportExportClose}
                PaperProps={{
                  sx: {
                    width: 200,
                    mt: 1, // Adjust margin to align with the parent menu
                    ml: 1, // Position the menu to the right of the parent menu
                  },
                }}
              >
                <MenuItem onClick={handleImportExportClose}>Print Survey</MenuItem>
                <MenuItem onClick={handleImportExportClose}>Import Survey</MenuItem>
                <MenuItem onClick={handleImportExportClose}>Export Survey</MenuItem>
                <MenuItem onClick={handleImportExportClose}>Export Survey to Word</MenuItem>
              </Menu>
            </Menu>

            <Typography variant="body2" sx={{ ml: 2 }}>
              Saved at {new Date().toLocaleTimeString()} {/* Display current time */}
            </Typography>
            <Box
              sx={{
                ml: 2,
                px: 2,
                py: 0.5,
                borderRadius: 1,
                bgcolor: 'lightblue',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2">Draft</Typography>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />

            <Button
              variant="outlined"
              sx={{ ml: 2, color: 'primary.main', borderColor: 'primary.main' }}
            >
              PREVIEW
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 2 }}
            >
              PUBLISH
            </Button>
          </Box>
        </Toolbar>

        {/* Survey Editor Section with Overflow Handling */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            overflowY: 'auto', // Allow vertical scrolling
            overflowX: 'hidden' // Prevent horizontal scrolling
          }} 
        >
          <SurveyEditor 
            selectedQuestion={selectedQuestion} 
            onQuestionSelect={setSelectedQuestion} 
            onNewQuestionAdded={handleNewQuestionAdded}
            mcqsettings={mcqsettings}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SurveyBuilder;
