import { Holding } from "../models/Holding.js";

export const getAllHoldings = async (req,res) =>{
    try{
        const allHoldings = await Holding.findAll();
        res.json(allHoldings);
    } catch(error){
        res.status(error?.status || 500).send({status: "Failed",data:{error:error?.message || error} })
    }
}

export const getHolding = async(req,res) =>{
    const {id} = req.params; 
    try{
        const uniqueHolding = await Holding.findOne({
            where: {
                id: id
            }
        });
        if(!uniqueHolding){
            return res.status(404).json({ message: "No existe ese holding" });
        }
        res.json(uniqueHolding);
    } catch (error){

    }
}

export const createHolding = async(req,res)=>{
    try{
        const {nombre,razon_social,rut,giro,email,fono_contacto} = req.body;
        
        const newHolding = await Holding.create({
            nombre: nombre,
            razon_social: razon_social,
            rut: rut,
            giro: giro,
            email: email,
            fono_contacto: fono_contacto,
        });
        res.json(newHolding);
    }catch (error){
        return res.status(500).json({ message: error.message });
    }
}

export const updateOneHolding = async(req,res)=>{
    try{
        const {id}=req.params;
        const {nombre,razon_social,rut,giro,email,fono_contacto} = req.body;

        const updateHolding = await Holding.findByPk(id);
        updateHolding.nombre = nombre;
        updateHolding.razon_social = razon_social;
        updateHolding.rut = rut;
        updateHolding.giro = giro;
        updateHolding.email = email;
        updateHolding.fono_contacto = fono_contacto;

        await updateHolding.save();
        res.json(updateHolding);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}

export const deleteOneHolding = async(req,res)=>{
    try{
        const {id}=req.params;
        await Holding.destroy({
            where: {id}
        })
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
}