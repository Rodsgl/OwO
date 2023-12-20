import { Router } from "express";
import { createFlujoDeCaja, getFlujosDeCaja, updateFlujoDeCaja, deleteFlujoDeCaja, getFlujoDeCaja } from "../controllers/flujodecaja.controller.js";
const router = Router();

router.get("/flujodecaja", getFlujosDeCaja);
router.post("/flujodecaja", createFlujoDeCaja);
router.put("/flujodecaja/:id", updateFlujoDeCaja);
router.delete("/flujodecaja/:id", deleteFlujoDeCaja);
router.get("/flujodecaja/:id", getFlujoDeCaja);

export default router;