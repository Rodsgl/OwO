import { Router } from "express";
import {
  createCheque,
  getCheques,
  getCheque,
  deteleChequera,
  updateCheque,
} from "../controllers/chequesfecha.controller.js";
const router = Router();

router.get("/chequeras/cartera", getCheques);
router.post("/chequera/cartera", createCheque);
router.put("/chequera/cartera/:id", updateCheque);
router.delete("/chequera/cartera/:id", deteleChequera);
router.get("/chequera/cartera/:id", getCheque);

export default router;
