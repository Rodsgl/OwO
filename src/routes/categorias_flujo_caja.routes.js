import { Router } from "express";
import { createCategoria, deleteCategoria, getCategoria, getCategorias, updateCategoria } from "../controllers/categorias.controller.js";
const router = Router();

router.get("/categorias", getCategorias);
router.post("/categorias", createCategoria);
router.put("/categorias/:id", updateCategoria);
router.delete("/categorias/:id", deleteCategoria);
router.get("/categorias/:id", getCategoria);

export default router;