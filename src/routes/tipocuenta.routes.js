import { Router } from "express";
import { createTipoCuenta, getTiposCuenta, updateTipoCuenta, deleteTipoCuenta, getTipoCuenta } from "../controllers/tipocuenta.controller.js";
const router = Router();

router.get("/tipo_cuenta", getTiposCuenta);
router.post("/tipo_cuenta", createTipoCuenta);
router.put("/tipo_cuenta/:id", updateTipoCuenta);
router.delete("/tipo_cuenta/:id", deleteTipoCuenta);
router.get("/tipo_cuenta/:id", getTipoCuenta);

export default router;