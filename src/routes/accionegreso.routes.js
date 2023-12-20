import { Router } from "express";
import {
  createAccionIngreso,
  deletAccion,
  getAccionIngreso,
  getAccionIngresos,
  updateAccion,
} from "../controllers/accioningreso.controller.js";
const router = Router();

router.get("/accion_egreso", getAccionIngresos);
router.post("/accion_egreso", createAccionIngreso);
router.put("/accion_egreso/:id", updateAccion);
router.delete("/accion_egreso/:id", deletAccion);
router.get("/accion_egreso/:id", getAccionIngreso);

export default router;
