import { DataTypes } from "sequelize";

const emailField = {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  validate: {
    isEmail: true,
  },
};

export default emailField;
