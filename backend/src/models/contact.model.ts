import { DataTypes } from "sequelize";
import sequelize from "../config/config";
import emailField from "../fields/email";

const Contact = sequelize.define("contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: emailField,
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Contact;
