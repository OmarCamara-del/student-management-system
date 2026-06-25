require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/testConnection");
const sequelize = require("./config/database");

// Register models
require("./models/User");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    // Create database tables if they don't exist
    await sequelize.sync();

    console.log("✅ Database synchronized");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();