import { Router } from "express";
import { createTipoCredito, getTiposCredito, updateTipoCredito, deleteTipoCredito, getTipoCredito } from "../controllers/tipocredito.controller.js";
const router = Router();

router.get("/tipo_credito", getTiposCredito);
router.post("/tipo_credito", createTipoCredito);
router.put("/tipo_credito/:id", updateTipoCredito);
router.delete("/tipo_credito/:id", deleteTipoCredito);
router.get("/tipo_credito/:id", getTipoCredito);

export default router;