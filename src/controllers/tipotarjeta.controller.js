import { TipoTarjeta } from "../models/TipoTarjeta.js";

export const getTiposTarjeta = async (req, res) => {
    try {
        const tiposTarjeta = await TipoTarjeta.findAll()
        res.json(tiposTarjeta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoTarjeta = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoTarjeta = await TipoTarjeta.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoTarjeta) {
            return res.status(404).json({ message: "No existe ese tipo de tarjeta" });
        }
        res.json(tipoTarjeta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoTarjeta = async (req, res) => {
    const { id, nombre_tipo_tarjeta } = req.body;
    try {
        const newTipoTarjeta = await TipoTarjeta.create({
            id: id,
            nombre_tipo_tarjeta: nombre_tipo_tarjeta,
        });
        res.json(newTipoTarjeta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoTarjeta = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_tipo_tarjeta } = req.body;

        const tipoTarjetamod = await TipoTarjeta.findByPk(id);
        tipoTarjetamod.nombre_tipo_tarjeta = nombre_tipo_tarjeta;

        await tipoTarjetamod.save();

        res.json(tipoTarjetamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoTarjeta = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoTarjeta.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};