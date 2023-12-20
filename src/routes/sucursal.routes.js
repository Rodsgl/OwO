import { Router } from 'express';
import { createOneSucursal, deleteOneSucursal, getAllSucursal, getOneSucursal, updateOneSucursal } from '../controllers/sucursal.controller.js';
const router = Router();

router.get("/sucursales", getAllSucursal);
router.get("/sucursal/:id", getOneSucursal);
router.post("/sucursal", createOneSucursal);
router.put("/sucursual/:id", updateOneSucursal);
router.delete("/sucursal/:id", deleteOneSucursal);

export default router;