import { Router } from "express";
import {
  createEstado,
  deleteEstado,
  getEstado,
  getEstados,
  updateEstado,
} from "../controllers/estado.controller.js";
const router = Router();

router.get("/estados", getEstados);
router.post("/estado", createEstado);
router.put("/estado/:id", updateEstado);
router.delete("/estado/:id", deleteEstado);
router.get("/estado/:id", getEstado);

export default router;
