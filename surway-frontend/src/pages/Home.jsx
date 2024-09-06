import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

const Home = () => {
  // Dummy projects list
  const projects = [
    { id: 1, name: 'Project A', description: 'Survey for marketing analysis' },
    { id: 2, name: 'Project B', description: 'Customer feedback survey' },
    { id: 3, name: 'Project C', description: 'Employee satisfaction survey' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>

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
    </Box>
  );
};

export default Home;
