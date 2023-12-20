import { Router } from "express";
import {
  createRegion,
  deleteRegion,
  getRegion,
  getRegiones,
  getRegionPais,
  updateRegion,
} from "../controllers/region.controller.js";
const router = Router();

router.get("/region", getRegiones);
router.post("/region", createRegion);
router.put("/region/:id", updateRegion);
router.delete("/region/:id", deleteRegion);
router.get("/region/:id", getRegion);
router.get("/region/paises/:pais", getRegionPais);

export default router;
