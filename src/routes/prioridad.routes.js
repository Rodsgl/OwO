import { Router } from "express";
import { createPrioridad, getPrioridades, updatePrioridad, deletePrioridad, getPrioridad } from "../controllers/prioridad.controller.js";
const router = Router();

router.get("/prioridad", getPrioridades);
router.post("/prioridad", createPrioridad);
router.put("/prioridad/:id", updatePrioridad);
router.delete("/prioridad/:id", deletePrioridad);
router.get("/prioridad/:id", getPrioridad);

export default router;