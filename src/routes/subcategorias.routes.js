import { Router } from "express";
import { createSubcategoria, deleteSubcategoria, getSubcategoria, getSubcategorias, updateSubcategoria } from "../controllers/subcategorias.controller.js";

const router = Router();

router.get("/subcategorias", getSubcategorias);
router.post("/subcategorias", createSubcategoria);
router.put("/subcategorias/:id", updateSubcategoria);
router.delete("/subcategorias/:id", deleteSubcategoria);
router.get("/subcategorias/:id", getSubcategoria);

export default router;