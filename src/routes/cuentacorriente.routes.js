import { Router } from "express";
import {
  createCuenta,
  deleteCuenta,
  getCuenta,
  getCuentas,
  updateCuenta,
} from "../controllers/cuentacorriente.controller.js";
const router = Router();

router.get("/cuentas_corrientes/cartera", getCuentas);
router.post("/cuenta_corriente/cartera", createCuenta);
router.put("/cuenta_corriente/:id", updateCuenta);
router.delete("/cuenta_corriente/:id", deleteCuenta);
router.get("/cuenta_corriente/:id", getCuenta);

export default router;
