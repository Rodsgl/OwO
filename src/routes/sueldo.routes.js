import { Router } from "express";
import { createSueldo, getSueldos, updateSueldo, deleteSueldo, getSueldo } from "../controllers/sueldo.controller.js";
const router = Router();

router.get("/sueldo", getSueldos);
router.post("/sueldo", createSueldo);
router.put("/sueldo/:id", updateSueldo);
router.delete("/sueldo/:id", deleteSueldo);
router.get("/sueldo/:id", getSueldo);

export default router;