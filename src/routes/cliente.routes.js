import { Router } from "express";
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClientes,
  updateCliente,
} from "../controllers/cliente.controller.js";
const router = Router();

router.get("/clientes", getClientes);
router.post("/cliente", createCliente);
router.put("/cliente/:id", updateCliente);
router.delete("/cliente/:id", deleteCliente);
router.get("/cliente/:id", getCliente);

export default router;
