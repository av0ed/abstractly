import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import https from "https";
import sequelize from "./config/config";
import subscriberRoutes from "./routes/subscriber.routes";
import contactRoutes from "./routes/contact.routes";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", subscriberRoutes);
app.use("/api", contactRoutes);

app.get("/", (_, res) => res.send("Express on Vercel"));

const options = {
  key: fs.readFileSync(
    path.resolve(__dirname, "../certificates/selfsigned.key"),
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, "../certificates/selfsigned.crt"),
  ),
};

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
