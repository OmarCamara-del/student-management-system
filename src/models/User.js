const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    studentId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM("student", "lecturer", "admin"),
      defaultValue: "student",
    },

    program: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

const Course = require("./Course");
const Enrollment = require("./Enrollment");

User.belongsToMany(Course, {
    through: Enrollment,
    foreignKey: "studentId"
});

Course.belongsToMany(User, {
    through: Enrollment,
    foreignKey: "courseId"
});
module.exports = User;