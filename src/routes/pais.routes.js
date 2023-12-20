import { Router } from "express";
import {
  createPais,
  getPaises,
  updatePais,
  deletePais,
  getPais,
} from "../controllers/pais.controller.js";
const router = Router();

router.get("/pais/listar", getPaises);
router.post("/pais", createPais);
router.put("/pais/:id", updatePais);
router.delete("/pais/:id", deletePais);
router.get("/pais/:id", getPais);

export default router;
