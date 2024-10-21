import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl =
  process.env.DATABASE_URL || "postgres://localhost:5432/mydatabase";

const sequelize = new Sequelize(databaseUrl, {
  host: "localhost",
  dialect: "postgres",
});

const Subscriber = sequelize.define("Subscriber", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

export default sequelize;
