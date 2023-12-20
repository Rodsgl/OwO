import { Router } from "express";
import {
  createCiudad,
  deleteCiudad,
  getCiudades,
  getCiudad,
  updateCiudad,
} from "../controllers/ciudad.controller.js";

const router = Router();

router.get("/ciudades", getCiudades);
router.post("/ciudad", createCiudad);
router.put("/ciudad/:id", updateCiudad);
router.delete("/ciudad/:id", deleteCiudad);
router.get("/ciudad/:id", getCiudad);

export default router;
