import { Router } from "express";
import { createTipoTarjeta, getTiposTarjeta, updateTipoTarjeta, deleteTipoTarjeta, getTipoTarjeta } from "../controllers/tipotarjeta.controller.js";
const router = Router();

router.get("/tipo_tarjeta", getTiposTarjeta);
router.post("/tipo_tarjeta", createTipoTarjeta);
router.put("/tipo_tarjeta/:id", updateTipoTarjeta);
router.delete("/tipo_tarjeta/:id", deleteTipoTarjeta);
router.get("/tipo_tarjeta/:id", getTipoTarjeta);

export default router;