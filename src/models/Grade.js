const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Grade = sequelize.define("Grade", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    studentId: {
        type: DataTypes.UUID,
        allowNull: false
    },

    courseId: {
        type: DataTypes.UUID,
        allowNull: false
    },

    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    letterGrade: {
        type: DataTypes.STRING,
        allowNull: false
    },

    approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Grade;