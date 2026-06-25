const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// REGISTER USER
const register = async (req, res) => {
    try {
        const {
            studentId,
            firstName,
            lastName,
            email,
            password,
            role,
            program,
            level
        } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            studentId,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            program,
            level
        });

        // Remove password from response
        const userResponse = {
            id: user.id,
            studentId: user.studentId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            program: user.program,
            level: user.level,
            status: user.status
        };

        res.status(201).json({
            success: true,
            message: "User registered successfully.",
            data: userResponse
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// LOGIN USER
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
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
    register,
    login
};