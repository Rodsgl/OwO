import {Router} from 'express';
import {getAllEmpresas,getOneEmpresa,createOneEmpresa,updateOneEmpresa,deleteOneEmpresa} from "../controllers/empresa.controller.js";
const router = Router();

router.get("/empresas",getAllEmpresas);
router.get("/empresa/:id",getOneEmpresa);
router.post("/empresa",createOneEmpresa);
router.put("/empresa/:id",updateOneEmpresa)
router.delete("/empresa/:id",deleteOneEmpresa);

export default router;