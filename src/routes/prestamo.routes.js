import { Router } from "express";
import { createPrestamo, getPrestamos, updatePrestamo, deletePrestamo, getPrestamo } from "../controllers/prestamo.controller.js";
const router = Router();

router.get("/prestamo", getPrestamos);
router.post("/prestamo", createPrestamo);
router.put("/prestamo/:id", updatePrestamo);
router.delete("/prestamo/:id", deletePrestamo);
router.get("/prestamo/:id", getPrestamo);

export default router;