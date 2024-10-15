const db = require('../models');

const Chapter = db.chapters;

const getChaptersByProject = async (req, res) => {
    try {
        const chapters = await Chapter.findAll({ where: { project_id: req.params.id } });
        if (chapters) return res.json(chapters);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const getChapterById = async (req, res) => {
    try {
        const chapter = await Chapter.findByPk(req.params.id);
        
        if (!chapter) return res.status(404).send('Chapter not found');
        
        res.json(chapter);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const createChapter = async (req, res) => {
    try {
        const chapter = await Chapter.create({
            title: req.body.title,
            project_id: req.body.project_id,
        });
        
        res.status(201).json(chapter);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const updateChapter = async (req, res) => {
    try {
        const chapter = await Chapter.findByPk(req.params.id);
        
        if (!chapter) return res.status(404).send('Chapter not found');
        
        await chapter.update(req.body);
        
        res.json(chapter);
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

const deleteChapter = async (req, res) => {
    try {
        const chapter = await Chapter.findByPk(req.params.id);
        
        if (!chapter) return res.status(404).send('Chapter not found');
        
        await chapter.destroy();
        
        res.json({ message: 'Chapter deleted' });
        
    } catch (err) {
        res.status(500).send(`Server error ${err.message}`);
    }
}

module.exports = { getChapterById, getChaptersByProject, deleteChapter, updateChapter, createChapter}