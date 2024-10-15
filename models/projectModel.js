const { password } = require("pg/lib/defaults")

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('projects',{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        }
    }, {timestamps: true})
    return Project
}