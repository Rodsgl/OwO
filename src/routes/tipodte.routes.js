import { Router } from "express";
import { createTipoDTE, getTiposDTE, updateTipoDTE, deleteTipoDTE, getTipoDTE } from "../controllers/tipodte.controller.js";
const router = Router();

router.get("/tipo_dte", getTiposDTE);
router.post("/tipo_dte", createTipoDTE);
router.put("/tipo_dte/:id", updateTipoDTE);
router.delete("/tipo_dte/:id", deleteTipoDTE);
router.get("/tipo_dte/:id", getTipoDTE);

export default router;