import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Modal, TextField, MenuItem } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

// Dropdown options for starting a survey
const surveyOptions = [
  { value: 'blank', label: 'Create a blank survey project' },
  { value: 'import_qsf', label: 'Import a QSF file' },
  { value: 'copy_existing', label: 'Copy a survey from an existing project' },
  { value: 'use_library', label: 'Use a survey from your library' },
];

const Home = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project A', description: 'Survey for marketing analysis' },
    { id: 2, name: 'Project B', description: 'Customer feedback survey' },
    { id: 3, name: 'Project C', description: 'Employee satisfaction survey' },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', folder: '', surveyType: '' });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleCreateProject = () => {
    const newId = projects.length + 1;
    const newProjectObj = {
      id: newId,
      name: newProject.name || 'Untitled Project',
      description: `Folder: ${newProject.folder}, Survey Type: ${surveyOptions.find(option => option.value === newProject.surveyType)?.label}`,
    };
    setProjects([...projects, newProjectObj]);
    handleCloseModal();
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header with 'My Projects' and 'Create Project' button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Create Project
        </Button>
      </Box>

      {/* Grid Container using Box */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Card key={project.id} elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              {/* Icon and Project Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                <Typography variant="h6">{project.name}</Typography>
              </Box>

              {/* Project Description */}
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>

              {/* Button to open Survey Builder */}
              <Button
                component={Link}
                to={`/survey-builder/${project.id}`}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Open Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal for creating a new project */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Create New Project
          </Typography>

          {/* Separate label and input for Project Name */}
          <Typography variant="body1" gutterBottom>
            Project Name
          </Typography>
          <TextField
            placeholder="Untitled Project"
            fullWidth
            sx={{ mb: 2 }}
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            InputProps={{
              style: { backgroundColor: 'lightgray', color: 'black' }, // Background and font color
            }}
          />

          {/* Separate label and input for Folder */}
          <Typography variant="body1" gutterBottom>
            Folder
          </Typography>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            value={newProject.folder}
            onChange={(e) => setNewProject({ ...newProject, folder: e.target.value })}
            InputProps={{
              style: { backgroundColor: 'lightgray', color: 'black' }, // Background and font color
            }}
          />

          {/* Separate label and input for Survey Type */}
          <Typography variant="body1" gutterBottom>
            How do you want to start the survey?
          </Typography>
          <TextField
            select
            fullWidth
            sx={{ mb: 2 }}
            value={newProject.surveyType}
            onChange={(e) => setNewProject({ ...newProject, surveyType: e.target.value })}
            InputProps={{
              style: { backgroundColor: 'lightgray', color: 'black' }, // Background and font color
            }}
          >
            {surveyOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Create Button */}
          <Button variant="contained" color="primary" fullWidth onClick={handleCreateProject}>
            Create
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
