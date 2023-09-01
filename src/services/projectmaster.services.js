const Project = require('../models/projectmaster.models');

exports.addProjectDetails = async (projectData) => {
  try {
    const project = await Project.create({
      project_code: projectData.project_code,
      project_name: projectData.project_name,
      client_name: projectData.client_name,
      project_startdate: projectData.project_startdate,
      project_enddate: projectData.project_enddate,
      project_status: projectData.project_status,
      project_activateddate: projectData.project_activateddate,
      project_deactivateddate: projectData.project_deactivateddate,
      activated_by: projectData.activated_by,
      deactivated_by: projectData.deactivated_by,
      comments: projectData.comments,
      created_by: projectData.created_by,
      updated_by: projectData.updated_by,
      created_date: projectData.created_date,
      updated_date: projectData.updated_date,
    });
    return project;
  } catch (error) {
    // Handle error gracefully
    return error;
  }
};


exports.updateProject = async (projectId, updates) => {
    try {
      const project = await Project.findByPk(projectId);
      if (project) {
        await project.update(updates);
        return project;
      }
      return null;
    } catch (error) {
      return error;
    }
  }
  
 exports.getProjectById = async (projectId) => {
    try {
      const project = await Project.findByPk(projectId);
      return project;
    } catch (error) {
      return error;
    }
  }
