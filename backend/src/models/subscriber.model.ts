import sequelize from "../config/config";
import emailField from "../fields/email";

const Subscriber = sequelize.define("subscriber", {
  email: emailField,
});

export default Subscriber;
