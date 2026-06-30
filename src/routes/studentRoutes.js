const express = require("express");

const router = express.Router();

const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controller/studentController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Get all students
router.get(
    "/",
    authMiddleware,
    authorizeRoles("admin", "lecturer"),
    getAllStudents
);

router.post(
    "/",
    authMiddleware,
    authorizeRoles("admin"),
    createStudent
);

router.put(
    "/:id",
    authMiddleware,
    authorizeRoles("admin"),
    updateStudent
);

// Get one student
router.get(
    "/:id",
    authMiddleware,
    authorizeRoles("admin", "lecturer"),
    getStudentById
);

// Delete student
router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles("admin"),
    deleteStudent
);

module.exports = router;