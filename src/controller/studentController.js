const User = require("../models/User");
// Create student
const bcrypt = require("bcrypt");

// Create student
const createStudent = async (req, res) => {

    try {

        const {
            studentId,
            firstName,
            lastName,
            email,
            password,
            program,
            level
        } = req.body;

        const existingStudent = await User.findOne({
            where: { email }
        });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Email already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = await User.create({

            studentId,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student",
            program,
            level

        });

        res.status(201).json({

            success: true,
            data: student

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await User.findAll({
            where: { role: "student" },
            attributes: { exclude: ["password"] }
        });

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get one student
const getStudentById = async (req, res) => {
    try {

        const student = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"] }
        });

        if (!student || student.role !== "student") {
            return res.status(404).json({
                success: false,
                message: "Student not found."
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const updateStudent = async (req, res) => {

    try {

        const student = await User.findByPk(req.params.id);

        if (!student) {

            return res.status(404).json({

                success: false,
                message: "Student not found."

            });

        }

        await student.update(req.body);

        res.status(200).json({

            success: true,
            data: student

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Delete student
const deleteStudent = async (req, res) => {

    try {

        const student = await User.findByPk(req.params.id);

        if (!student || student.role !== "student") {
            return res.status(404).json({
                success: false,
                message: "Student not found."
            });
        }

        await student.destroy();

        res.status(200).json({
            success: true,
            message: "Student deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};