
module.exports = app =>{

const express = require('express');
const projectController = require('../controllers/projectmaster.controllers');

const projectrouter = express.Router();

projectrouter.post('/', projectController.createProject);
projectrouter.get('/:projectId', projectController.getProject);
projectrouter.put('/:projectId', projectController.updateProject);
//projectrouter.delete('/:projectId', projectController.deleteProject);

app.use('/projectmaster',projectrouter);

}


// module.exports = router;