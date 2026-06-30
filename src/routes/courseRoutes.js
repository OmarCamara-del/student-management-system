const express = require("express");

const router = express.Router();

const {
    createCourse,
    getCourses
} = require("../controller/courseController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
    "/",
    authMiddleware,
    authorizeRoles("admin"),
    createCourse
);

router.get(
    "/",
    authMiddleware,
    getCourses
);

module.exports = router;