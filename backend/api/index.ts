import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//import fs from "fs";
//import path from "path";
//import https from "https";
//import { Sequelize } from "sequelize";
import { Pool } from "pg";
//import subscriberRoutes from "./routes/subscriber.routes";
//import contactRoutes from "./routes/contact.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
//const sequelize = new Sequelize(databaseUrl, {
//  dialect: "postgres",
//});

app.use(express.json());
app.use(cors());
//app.use("/api", subscriberRoutes);
//app.use("/api", contactRoutes);

app.get("/", async (_, res) => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const client = await pool.connect();
  const result = await client.query("SELECT version()");
  client.release();
  const { version } = result.rows[0];
  res.json({ version });
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

//const options = {
//  key: fs.readFileSync(
//    path.resolve(__dirname, "../certificates/selfsigned.key"),
//  ),
//  cert: fs.readFileSync(
//    path.resolve(__dirname, "../certificates/selfsigned.crt"),
//  ),
//};

//const startServer = async () => {
//  try {
//    await sequelize.authenticate();
//    console.log("Database connected successfully.");
//
//    await sequelize.sync();
//    console.log("Database synced successfully.");
//
//    https.createServer(options, app).listen(PORT, () => {
//      console.log(`HTTPS server is running on port https://localhost:${PORT}`);
//    });
//  } catch (error) {
//    console.error("Unable to connect to the database:", error);
//  }
//};
//
//startServer();

module.exports = app;
