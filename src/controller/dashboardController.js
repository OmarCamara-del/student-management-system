const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const Grade = require("../models/Grade");

const getDashboard = async (req, res) => {
    try {

        const students = await User.count({
            where: { role: "student" }
        });

        const lecturers = await User.count({
            where: { role: "lecturer" }
        });

        const admins = await User.count({
            where: { role: "admin" }
        });

        const courses = await Course.count();

        const enrollments = await Enrollment.count();

        const grades = await Grade.count();

        res.status(200).json({
            success: true,
            dashboard: {
                totalStudents: students,
                totalLecturers: lecturers,
                totalAdmins: admins,
                totalCourses: courses,
                totalEnrollments: enrollments,
                totalGrades: grades
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getDashboard
};