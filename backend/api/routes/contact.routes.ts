import express from "express";
import { body, matchedData, validationResult } from "express-validator";
import Contact from "../models/contact.model";

const router = express.Router();
const ROUTE = "/contact";

router.post(
  ROUTE,
  body("name").notEmpty(),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address.")
    .normalizeEmail()
    .escape(),
  body("message").notEmpty(),
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const data = matchedData<{ name: string; email: string; message: string }>(
      req,
    );

    try {
      await Contact.create({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      res.json(`Message received from ${data.email}`);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  },
);

export default router;
