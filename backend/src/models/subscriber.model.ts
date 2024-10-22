import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const Subscriber = sequelize.define("subscriber", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

export default Subscriber;
