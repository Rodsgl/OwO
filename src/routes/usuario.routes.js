import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/usuario.controller.js";
const router = Router();

router.get("/usuario/listar", getUsuarios);
router.post("/usuario/agregar", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);
router.get("/usuario/:id", getUsuario);

export default router;