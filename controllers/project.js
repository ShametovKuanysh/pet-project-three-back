const db = require('../models');

const Project = db.projects;

const getProject = async (req, res) => {
    try {
        const projects = await Project.findAll({ where: { user_id: req.user.id } });
        // console.log(JSON.stringify(projects));
        if (projects) return res.json(projects);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id, { where: { id: req.params.id } });
        
        if (!project) return res.status(404).send('Project not found');
        
        res.json(project);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const createProject = async (req, res) => {
    try {
        const project = await Project.create({
            title: req.body.title,
            user_id: req.user.id,
            color: '#fff',
        });
        
        res.status(201).json(project);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const updateProject = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        
        if (!project) return res.status(404).send('Project not found');
        
        await project.update(req.body);
        
        res.json(project);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        
        if (!project) return res.status(404).send('Project not found');
        
        await project.destroy();
        
        res.json({ message: 'Project deleted' });
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

module.exports = { getProject, getProjectById, createProject, updateProject, deleteProject}