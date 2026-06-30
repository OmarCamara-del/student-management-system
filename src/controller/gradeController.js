const Grade = require("../models/Grade");

// Lecturer adds grade
const addGrade = async (req, res) => {

    try {

        const grade = await Grade.create(req.body);

        res.status(201).json({
            success: true,
            message: "Grade added successfully.",
            data: grade
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// View all grades
const getGrades = async (req, res) => {

    try {

        const grades = await Grade.findAll();

        res.status(200).json({
            success: true,
            count: grades.length,
            data: grades
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Administrator approves grade
const approveGrade = async (req, res) => {

    try {

        const grade = await Grade.findByPk(req.params.id);

        if (!grade) {

            return res.status(404).json({
                success: false,
                message: "Grade not found."
            });

        }

        grade.approved = true;

        await grade.save();

        res.status(200).json({
            success: true,
            message: "Grade approved successfully.",
            data: grade
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addGrade,
    getGrades,
    approveGrade
};