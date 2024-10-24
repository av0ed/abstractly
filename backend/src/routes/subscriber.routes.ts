import express from "express";
import { body, matchedData, validationResult } from "express-validator";
import Subscriber from "../models/subscriber.model";

const router = express.Router();
const ROUTE = "/subscribe";

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
      await Subscriber.create({ email: data.email });
      res.json(`Subscription success for ${data.email}`);
    } catch (error) {
      // TODO: this needs to be displayed as an appropriate error on the frontend.
      // "Email already registered."
      res.status(500).json({ error: "Database error" });
    }
  },
);

export default router;
