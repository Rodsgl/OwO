import { Router } from "express";
import {
  createConcepto,
  deleteConcepto,
  getConcepto,
  getConceptos,
  updateConcepto,
} from "../controllers/conceptoflujocaja.controller.js";

const router = Router();

router.get("/conceptos", getConceptos);
router.post("/concepto", createConcepto);
router.put("/concepto/:id", updateConcepto);
router.delete("/concepto/:id", deleteConcepto);
router.get("/concepto/:id", getConcepto);

export default router;
