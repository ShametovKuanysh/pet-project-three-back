const db = require('../models')

const Task = db.tasks

const getAllTasksByChapter = async (req, res) => {
    try {
        const tasks = await Task.findAll(
            {
                where: {chapter_id: req.params.id},
                order: [
                    ['id', 'ASC'],
                ]
            })

        if (tasks) return res.json(tasks)
    } catch (err){
        res.status(500).send(`Server error ${err.message}`);
    }
}

const getAllTasksByProject = async (req, res) => { 
    try {
        const tasks = await Task.findAll({where: {project_id: req.params.id}})

        if (tasks) return res.json(tasks)
    } catch (err){
        res.status(500).send(`Server error ${err.message}`);
    }
}

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id)

        if (!task) return res.status(404).send('Task not found')

        res.json(task)
    } catch (err){
        res.status(500).send(`Server error ${err.message}`);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create({
                ...req.body,
                creator_id: req.user.id,
            })
        
        res.status(201).json(task)

    } catch (err) {
        res.status(500).send(`Server error ${err.message}`)
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        
        if (!task) return res.status(404).send('Task not found');
        
        await task.update(req.body);
        
        res.json(task);
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`)
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id)

        if (!task) return res.status(404).send('Task not found')

        await task.destroy()

        res.json({ message: 'Task deleted' })
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`)
    }
}

module.exports = { getAllTasksByChapter, getAllTasksByProject, getTaskById, createTask, updateTask, deleteTask }