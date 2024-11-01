import express from "express";
import { body, matchedData, validationResult } from "express-validator";
import Contact from "../models/contact.model";

const router = express.Router();
const ROUTE = "/contact";

router.post(
  ROUTE,
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address.")
    .normalizeEmail()
    .escape(),
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const data = matchedData(req);

    try {
      await Contact.create({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      res.json(`Subscription success for ${data.email}`);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  },
);

export default router;
