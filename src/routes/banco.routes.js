import { Router } from "express";
import {
  createBanco,
  deleteBanco,
  getBanco,
  getBancos,
  updateBanco,
} from "../controllers/banco.controller.js";
const router = Router();

router.get("/banco", getBancos);
router.post("/banco", createBanco);
router.put("/banco/:id", updateBanco);
router.delete("/banco/:id", deleteBanco);
router.get("/banco/:id", getBanco);

export default router;
