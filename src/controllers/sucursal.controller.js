import { Sucursal } from "../models/Sucursal.js";

export const getAllSucursal = async (req, res) => {
    try {
        const AllSucursal = await Sucursal.findAll();
        res.json(AllSucursal);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}

export const getOneSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        const getSucursal = await Sucursal.findAll({
            where: { id: id }
        });
        if (!getSucursal) {
            return res.status(404).json({ message: "No existe esa empresa" });
        }
        res.json(getSucursal);

    } catch (errror) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } });
    }
}

export const createOneSucursal = async (req, res) => {
    const {
        id,
        nombre,
        email,
        fono_contacto,
        empresaId,
    } = req.body;

    try {
        const createSucursal = await Sucursal.create({
            id: id,
            nombre: nombre,
            email: email,
            fono_contacto: fono_contacto,
            empresaId: empresaId,
        });
        res.json(createSucursal);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } });
    }
}

export const updateOneSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, fono_contacto } = req.body;

        const updateSucursal = await Sucursal.findByPk(id);
        updateSucursal.nombre = nombre;
        updateSucursal.email = email;
        updateSucursal.fono_contacto = fono_contacto;

        await updateSucursal.save();
        res.json(updateSucursal);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } });
    }
}

export const deleteOneSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        await Sucursal.destroy({
            where: { id }
        });
        res.sendStatus(204);

    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } });
    }
}