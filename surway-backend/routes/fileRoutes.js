const express = require('express');
const { body, validationResult } = require('express-validator'); // Use require for validation
const surveys = require('../models/fileSchema.js');

const router = express.Router();

// GET all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await surveys.find();

        // Function to format dates
        const formatDate = (date) => {
            if (!date) return 'N/A'; // Return 'N/A' if date is not provided
            const dateObj = new Date(date);
            return isNaN(dateObj.getTime()) ? 'N/A' : dateObj.toISOString().split('T')[0]; // Format date if valid
        };

        // Format dates in the projects array
        const formattedProjects = projects.map(project => {
            return {
                ...project.toObject(), // Convert mongoose document to plain object
                creationDate: formatDate(project.creationDate), // Format creation date
                lastModified: formatDate(project.lastModified) // Format modified date
            };
        });

        res.status(200).json(formattedProjects); // Use 200 for a successful GET
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ success: false, message: 'Server Error' }); // 500 for server errors
    }
});



// POST a new project with validation
router.post(
    '/projects',
    [
        // Validate required fields
        body('name', 'Project name is required').notEmpty(),
       
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() }); // 400 for bad request
        }

        const { name} = req.body;

        try {
            // Create a new project instance
            const newProject = new surveys({
                name
            });

            // Save the project to the database
            await newProject.save();

            res.status(201).json({ success: true, project: newProject }); // 201 for successful creation
        } catch (error) {
            console.error('Error creating project:', error);
            res.status(500).json({ success: false, message: 'Server Error' }); // 500 for server errors
        }
    }
);


//update status 
router.put('/projects/:id',
    [
        // Validate required fields
        body('status', 'Project status is required').notEmpty().isIn(['active', 'new', 'closed']).withMessage('Status must be one of active, new, or closed'),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() }); // 400 for bad request
        }

        const { status } = req.body;
        const projectId = req.params.id;

        try {
            // Find the project by ID and update status and lastModified date
            const updatedProject = await surveys.findByIdAndUpdate(
                projectId,
                {
                    status,
                    lastModified: Date.now() // Update the lastModified date
                },
                { new: true } // Return the updated document
            );

            if (!updatedProject) {
                return res.status(404).json({ success: false, message: 'Project not found' });
            }

            res.status(200).json({ success: true, project: updatedProject }); // 200 for successful update
        } catch (error) {
            console.error('Error updating project:', error);
            res.status(500).json({ success: false, message: 'Server Error' }); // 500 for server errors
        }
    }
);


module.exports = router;
