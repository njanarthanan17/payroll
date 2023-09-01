const projectService = require('../services/projectmaster.services');

async function createProject(req, res) {
  const projectData = req.body;
  
  try {
    const newProject = await projectService.addProjectDetails(projectData);
    console.log("djjkdvkjdv",newProject);
    if (newProject) {
      res.status(201).json({ message: 'Project created successfully', project: newProject });
    } else {
      res.status(500).json({ message: 'Failed to create project' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

async function updateProject(req, res) {
  const projectId = req.params.projectId;
  const updates = req.body;
  
  try {
    const updatedProject = await projectService.updateProject(projectId, updates);
    if (updatedProject) {
      res.json({ message: 'Project updated successfully', project: updatedProject });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

async function getProject(req, res) {
  const projectId = req.params.projectId;
  
  try {
    const project = await projectService.getProjectById(projectId);
    if (project) {
      res.json({ project });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

module.exports = {
  createProject,
  updateProject,
  getProject,
};
                                                                                    