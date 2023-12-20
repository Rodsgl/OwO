import { Router } from "express";
import {
  createAuxiliarFlujoCaja,
  deleteAuxiliarFlujoCaja,
  getAuxiliarFlujoCaja,
  getAuxiliarFlujoCajas,
  updateAuxiliarFlujoCaja,
} from "../controllers/auxiliarflujocaja.controller.js";
const router = Router();

router.get("/auxiliar_flujo_caja", getAuxiliarFlujoCajas);
router.post("/auxiliar_flujo_caja", createAuxiliarFlujoCaja);
router.put("/auxiliar_flujo_caja/:id", updateAuxiliarFlujoCaja);
router.delete("/auxiliar_flujo_caja/:id", deleteAuxiliarFlujoCaja);
router.get("/auxiliar_flujo_caja/:id", getAuxiliarFlujoCaja);

export default router;
