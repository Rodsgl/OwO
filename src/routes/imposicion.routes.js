import { Router } from "express";
import { createImposicion, getImposiciones, updateImposicion, deleteImposicion, getImposicion } from "../controllers/imposiciones.controller.js";
const router = Router();

router.get("/imposiciones", getImposiciones);
router.post("/imposiciones", createImposicion);
router.put("/imposiciones/:id", updateImposicion);
router.delete("/imposiciones/:id", deleteImposicion);
router.get("/imposiciones/:id", getImposicion);

export default router;