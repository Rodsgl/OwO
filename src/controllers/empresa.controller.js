import {Empresa} from "../models/Empresa.js";

export const getAllEmpresas = async(req,res) =>{
    try{
        const AllEmpresas = await Empresa.findAll();
        res.json(AllEmpresas);
    }catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}

export const getOneEmpresa = async(req,res)=>{
    try{
        const {id} = req.params;
        const getEmpresa = await Empresa.findOne({
            where: {id:id}
        });
        if(!getEmpresa){
            return res.status(404).json({ message: "No existe esa empresa" });
        }
        res.json(getEmpresa);

    }catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}

export const createOneEmpresa = async(req,res)=>{
    try{
        const {nombre,razon_social,rut,giro,email,fono_contacto,holdingId,ciudadId} = req.body;

        const newEmpresa = await Empresa.create({
            nombre: nombre,
            razon_social: razon_social,
            rut: rut,
            giro: giro,
            email: email,
            fono_contacto: fono_contacto,
            holdingId: holdingId,
            ciudadId: ciudadId,
        });
        res.json(newEmpresa);

    }catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}

export const updateOneEmpresa=async(req,res)=>{
    try{
        const {id} = req.params;
        const {nombre,razon_social,rut,giro,email,fono_contacto} = req.body;

        const updateEmpresa = await Empresa.findByPk(id);
        updateEmpresa.nombre = nombre
        updateEmpresa.razon_social= razon_social;
        updateEmpresa.rut= rut;
        updateEmpresa.giro= giro;
        updateEmpresa.email= email;
        updateEmpresa.fono_contacto= fono_contacto;
        updateEmpresa.holdingId=holdingId;
        updateEmpresa.ciudadId=ciudadId;

        await updateEmpresa.save();
        res.json(updateEmpresa);
        
    }catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}

export const deleteOneEmpresa=async(req,res)=>{
    try{
        const {id} = req.params;
        await Empresa.destroy({
            where: {id}
        });
        res.sendStatus(204);
    }catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}