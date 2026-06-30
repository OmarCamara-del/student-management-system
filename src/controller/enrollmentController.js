const Enrollment = require("../models/Enrollment");

const enrollStudent = async (req, res) => {

    try {

        const enrollment = await Enrollment.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student enrolled successfully.",
            data: enrollment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getEnrollments = async (req, res) => {

    try {

        const enrollments = await Enrollment.findAll();

        res.status(200).json({
            success: true,
            count: enrollments.length,
            data: enrollments
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    enrollStudent,
    getEnrollments
};