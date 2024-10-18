import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl =
  process.env.DATABASE_URL || "postgres://localhost:5432/mydatabase";

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
});

export default sequelize;
