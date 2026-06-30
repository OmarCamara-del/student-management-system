const express = require("express");

const router = express.Router();

const {
    register,
    login,
    getProfile
} = require("../controller/authController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/register", register);
router.post("/login", login)
router.get(
    "/profile",
    authMiddleware,
    getProfile
);
router.get(
    "/admin",
    authMiddleware,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin!"
        });
    }
);
router.get("/test", (req, res) => {
    res.json({
        message: "Auth routes working"
    });
});
module.exports = router;