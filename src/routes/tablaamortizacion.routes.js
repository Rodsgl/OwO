import { Router } from "express";
import { createTablaAmortizacion, getTablasAmortizacion, updateTablaAmortizacion, deleteTablaAmortizacion, getTablaAmortizacion } from "../controllers/tablaamortizacion.controller.js";
const router = Router();

router.get("/tabla_amortizacion", getTablasAmortizacion);
router.post("/tabla_amortizacion", createTablaAmortizacion);
router.put("/tabla_amortizacion/:id", updateTablaAmortizacion);
router.delete("/tabla_amortizacion/:id", deleteTablaAmortizacion);
router.get("/tabla_amortizacion/:id", getTablaAmortizacion);

export default router;