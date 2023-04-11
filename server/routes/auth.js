import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.use("/login", login);

export default router;
