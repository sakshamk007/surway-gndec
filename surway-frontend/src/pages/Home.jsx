import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    // Dummy projects list
    const projects = [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
      { id: 3, name: 'Project C' },
    ];
  
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Surway
      </Typography>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/survey-builder/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" href="/survey-builder">
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
