import { Router } from "express";
import { createTipoMoneda, getTiposMoneda, updateTipoMoneda, deleteTipoMoneda, getTipoMoneda } from "../controllers/tipomoneda.controller.js";
const router = Router();

router.get("/tipo_moneda", getTiposMoneda);
router.post("/tipo_moneda", createTipoMoneda);
router.put("/tipo_moneda/:id", updateTipoMoneda);
router.delete("/tipo_moneda/:id", deleteTipoMoneda);
router.get("/tipo_moneda/:id", getTipoMoneda);

export default router;