import express from "express";
import sequelize from "./config/config";

const app = express();
const port = 3001;
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello, world!");
});

app.post("/api/subscribe", (req, res) => {
  res.send("POSTing to newsletter...");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync();
    console.log("Database synced successfully.");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
