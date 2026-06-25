const sequelize = require("./database");

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ PostgreSQL Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;