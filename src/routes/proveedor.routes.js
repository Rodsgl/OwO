import { Router } from "express";
import { createProveedor, getProveedores, updateProveedor, deleteProveedor, getProveedor } from "../controllers/proveedor.controller.js";
const router = Router();

router.get("/proveedor", getProveedores);
router.post("/proveedor", createProveedor);
router.put("/proveedor/:id", updateProveedor);
router.delete("/proveedor/:id", deleteProveedor);
router.get("/proveedor/:id", getProveedor);

export default router;