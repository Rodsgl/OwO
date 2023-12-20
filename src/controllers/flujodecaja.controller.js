import { FlujoDeCaja } from "../models/FlujoDeCaja.js";

export const getFlujosDeCaja = async (req, res) => {
    try {
        const flujosdecaja = await FlujoDeCaja.findAll()
        res.json(flujosdecaja);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getFlujoDeCaja = async (req, res) => {
    try {
        const { id } = req.params;
        const flujodecaja = await FlujoDeCaja.findOne({
            where: {
                id: id,
            }
        });

        if (!flujodecaja) {
            return res.status(404).json({ message: "No existe ese Flujo de Caja" });
        }
        res.json(flujodecaja);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createFlujoDeCaja = async (req, res) => {
    const { id,
        nombre,
        sucursalId,
        empresaId,
        auxiliarId,
    } = req.body;
    try {
        const newFlujoDeCaja = await FlujoDeCaja.create({
            id: id,
            nombre: nombre,
            sucursalId: sucursalId,
            empresaId: empresaId,
            auxiliarId: auxiliarId,
        });
        res.json(newFlujoDeCaja);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateFlujoDeCaja = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre,
            sucursalId,
            empresaId,
            auxiliarId,
        } = req.body;

        const flujodecajamod = await FlujoDeCaja.findByPk(id);
        flujodecajamod.nombre = nombre;
        flujodecajamod.sucursalId = sucursalId;
        flujodecajamod.empresaId = empresaId;
        flujodecajamod.auxiliarId = auxiliarId;

        await flujodecajamod.save();

        res.json(flujodecajamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteFlujoDeCaja = async (req, res) => {
    try {
        const { id } = req.params;
        await FlujoDeCaja.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};