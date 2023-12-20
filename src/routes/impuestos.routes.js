import { Router } from "express";
import { createImpuesto, getImpuestos, updateImpuesto, deleteImpuesto, getImpuesto } from "../controllers/impuestos.controller.js";
const router = Router();

router.get("/impuestos", getImpuestos);
router.post("/impuestos", createImpuesto);
router.put("/impuestos/:id", updateImpuesto);
router.delete("/impuestos/:id", deleteImpuesto);
router.get("/impuestos/:id", getImpuesto);

export default router;