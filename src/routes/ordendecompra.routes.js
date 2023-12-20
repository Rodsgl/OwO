import { Router } from "express";
import { createOrdenDeCompra, getOrdenesDeCompra, updateOrdenDeCompra, deleteOrdenDeCompra, getOrdenDeCompra } from "../controllers/ordendecompra.controller.js";
const router = Router();

router.get("/ordendecompra", getOrdenesDeCompra);
router.post("/ordendecompra", createOrdenDeCompra);
router.put("/ordendecompra/:id", updateOrdenDeCompra);
router.delete("/ordendecompra/:id", deleteOrdenDeCompra);
router.get("/ordendecompra/:id", getOrdenDeCompra);

export default router;