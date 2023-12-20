import { Router } from "express";
import {
  createCartola,
  getCartolas,
  getCartola,
  deleteCartola,
  updateCartola,
} from "../controllers/cartola.controller.js";
const router = Router();

router.get("/cartolas", getCartolas);
router.post("/cartolas", createCartola);
router.put("/cartolas/:id", updateCartola);
router.delete("/cartolas/:id", deleteCartola);
router.get("/cartolas/:id", getCartola);

export default router;
