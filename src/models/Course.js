const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    courseCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    courseTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Course;