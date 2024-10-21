import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import https from "https";
import sequelize from "./config/config";
import { body, validationResult } from "express-validator";

const PORT = 3001;
const app = express();
const options = {
  key: fs.readFileSync(
    path.resolve(__dirname, "../certificates/selfsigned.key"),
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, "../certificates/selfsigned.crt"),
  ),
};

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello, friend.");
});

app.post("/api/subscribe", (req, res) => {
  const email = req.body.email;

  // validate here
  //
  if (!email /*or not valid*/) {
    return res.status(400).json({ error: "Invalid email address." });
  }
  // send to DB
  console.log("req body: ", req.body);
  console.log("req headers: ", req.headers);
  // respond to client
  res.json({ message: "Subscription success", email });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync();
    console.log("Database synced successfully.");

    https.createServer(options, app).listen(PORT, () => {
      console.log(`HTTPS server is running on port https://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
