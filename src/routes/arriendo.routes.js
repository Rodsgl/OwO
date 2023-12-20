import { Router } from "express";
import {
  createArriendo,
  deleteArriendo,
  getArriendo,
  getArriendos,
  updateArriendo,
} from "../controllers/arriendo.controller.js";
const router = Router();

router.get("/arriendo", getArriendos);
router.post("/arriendo", createArriendo);
router.put("/arriendo/:id", updateArriendo);
router.delete("/arriendo/:id", deleteArriendo);
router.get("/arriendo/:id", getArriendo);

export default router;
