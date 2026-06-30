const express = require("express");

const router = express.Router();

const {
    addGrade,
    getGrades,
    approveGrade
} = require("../controller/gradeController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Lecturer/Admin adds grade
router.post(
    "/",
    authMiddleware,
    authorizeRoles("lecturer", "admin"),
    addGrade
);

// Everyone logged in can view grades for now
router.get(
    "/",
    authMiddleware,
    getGrades
);

// Admin approves grade
router.put(
    "/approve/:id",
    authMiddleware,
    authorizeRoles("admin"),
    approveGrade
);

module.exports = router;