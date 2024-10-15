module.exports = (sequelize, DataTypes) => {
    const Chapter = sequelize.define('chapters',{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'projects',
                key: 'id'
            },
            allowNull: false
        }
    }, {timestamps: true})
    return Chapter
}