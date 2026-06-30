const express = require("express");

const router = express.Router();

const {
    enrollStudent,
    getEnrollments
} = require("../controller/enrollmentController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
    "/",
    authMiddleware,
    authorizeRoles("student", "admin"),
    enrollStudent
);

router.get(
    "/",
    authMiddleware,
    authorizeRoles("admin", "lecturer"),
    getEnrollments
);

module.exports = router;