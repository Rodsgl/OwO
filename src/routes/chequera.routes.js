import { Router } from "express";
import {
  createChequera,
  deleteChequera,
  getChequera,
  getChequeras,
  updateChequera,
} from "../controllers/chequera.controller.js";
const router = Router();

router.get("/chequera", getChequera);
router.post("/chequera", createChequera);
router.put("/chequera/:id", updateChequera);
router.delete("/chequera/:id", deleteChequera);
router.get("/chequera/:id", getChequeras);

export default router;
