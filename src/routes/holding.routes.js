import { Router } from "express";
import {getAllHoldings,getHolding,createHolding,updateOneHolding,deleteOneHolding} from "../controllers/holding.controller.js";
const router = Router();

router.get("/holdings", getAllHoldings);
router.get("/holding/:id",getHolding);
router.post("/holding",createHolding);
router.put("/holding/:id",updateOneHolding);
router.delete("/holding/:id",deleteOneHolding);

export default router;