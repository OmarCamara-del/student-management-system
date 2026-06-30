const express = require("express");

const router = express.Router();

const {
    getDashboard
} = require("../controller/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
    "/",
    authMiddleware,
    authorizeRoles("admin"),
    getDashboard
);

module.exports = router;