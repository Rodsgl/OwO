import { Router } from "express";
import { createMedioPago, getMediosPago, updateMedioPago, deleteMedioPago, getMedioPago } from "../controllers/mediopago.controller.js";
const router = Router();

router.get("/mediopago", getMediosPago);
router.post("/mediopago", createMedioPago);
router.put("/mediopago/:id", updateMedioPago);
router.delete("/mediopago/:id", deleteMedioPago);
router.get("/mediopago/:id", getMedioPago);

export default router;