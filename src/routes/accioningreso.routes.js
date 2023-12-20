import { Router } from "express";
import {
  createAccionIngreso,
  deletAccion,
  getAccionIngreso,
  getAccionIngresos,
  updateAccion,
} from "../controllers/accioningreso.controller.js";
const router = Router();

router.get("/accion_ingreso", getAccionIngresos);
router.post("/accion_ingreso", createAccionIngreso);
router.put("/accion_ingreso/:id", updateAccion);
router.delete("/accion_ingreso/:id", deletAccion);
router.get("/accion_ingreso/:id", getAccionIngreso);

export default router;
