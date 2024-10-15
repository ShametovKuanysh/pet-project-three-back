module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('tasks', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        is_done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        closed_at: {
            type: DataTypes.DATE,
            allowNull: true
        }, 
        project_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'projects',
                key: 'id'
            }
        }, 
        chapter_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'chapters',
                key: 'id'
            }
        },
        creator_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'users',
                key: 'id'
            }
        }
    }, {timestamps: true})
    return Task
}