import { Router } from "express";
import { createTipoVencimieto, getTiposVencimiento, updateTipoVencimiento, deleteTipoVencimiento, getTipoVencimiento } from "../controllers/tipovencimiento.controller.js";
const router = Router();

router.get("/tipo_vencimiento", getTiposVencimiento);
router.post("/tipo_vencimiento", createTipoVencimieto);
router.put("/tipo_vencimiento/:id", updateTipoVencimiento);
router.delete("/tipo_vencimiento/:id", deleteTipoVencimiento);
router.get("/tipo_vencimiento/:id", getTipoVencimiento);

export default router;