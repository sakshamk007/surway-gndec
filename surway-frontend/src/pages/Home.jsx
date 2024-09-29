import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Modal, TextField, MenuItem, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'new', label: 'New' },
  { value: 'closed', label: 'Closed' },
];

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setSnackbarMessage('Failed to fetch projects');
        setSnackbarOpen(true);
      }
    };
    fetchProjects();
  }, [newProject]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewProject({ name: '' }); // Reset new project state
  };

  const handleCreateProject = async () => {
    if (!newProject.name.trim()) {
      setSnackbarMessage('Project name cannot be empty');
      setSnackbarOpen(true);
      return;
    }

    const newProjectObj = {
      name: newProject.name || 'Untitled Project',
    };

    try {
      const response = await axios.post('http://localhost:5000/api/projects', newProjectObj);
      setProjects([...projects, response.data]);
      handleCloseModal();
      setSnackbarMessage('Project created successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error creating project:", error);
      setSnackbarMessage('Failed to create project');
      setSnackbarOpen(true);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const matchesFilter = filter === 'all' || project.status?.toLowerCase() === filter || false;
    return matchesSearch && matchesFilter;
  });


  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h4">My Projects</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Search Projects"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          />
          <TextField
            select
            label="Status"
            variant="outlined"
            size="small"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              minWidth: '100px',
            }}
          >
            {filterOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Create Project
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr 1fr auto',
          gap: 1,
          p: 1,
          bgcolor: 'primary.main',
          color: 'white',
          minHeight: '50px',
          alignItems: 'center',
        }}
      >
        <Typography>Project Name</Typography>
        <Typography>Status</Typography>
        <Typography>Responses</Typography>
        <Typography>Last Modified</Typography>
        <Typography>Creation Date</Typography>
        <Typography></Typography>
      </Box>

      {filteredProjects.map((project) => (
        <Box
          key={project.id}
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr 1fr auto',
            gap: 1,
            alignItems: 'center',
            bgcolor: 'grey.200',
            p: 1,
            minHeight: '50px',
          }}
        >
          <Typography>{project.name}</Typography>
          <Typography>{project.status}</Typography>
          <Typography>{project.responses}</Typography>
          <Typography>{project.lastModified}</Typography>
          <Typography>{project.creationDate}</Typography>
          <Button
            component={Link}
            to={`/survey-builder/${project._id}`}
            state={{ projectName: project.name }}
            variant="contained"
            color="primary"
            sx={{ height: '30px', width: 'fit-content' }}
          >
            Open Project
          </Button>
        </Box>
      ))}

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            p: { xs: 2, sm: 4 },
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Create New Project
          </Typography>

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
              style: { backgroundColor: 'lightgray', color: 'black' },
            }}
          />

          <Button variant="contained" color="primary" fullWidth onClick={handleCreateProject}>
            Create
          </Button>
        </Box>
      </Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
