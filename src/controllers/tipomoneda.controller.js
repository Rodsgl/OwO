import { TipoMoneda } from "../models/TipoMoneda.js";

export const getTiposMoneda = async (req, res) => {
    try {
        const tiposMoneda = await TipoMoneda.findAll()
        res.json(tiposMoneda);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoMoneda = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoMoneda = await TipoMoneda.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoMoneda) {
            return res.status(404).json({ message: "No existe ese tipo de tarjeta" });
        }
        res.json(tipoMoneda);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoMoneda = async (req, res) => {
    const { id, nombre_tipo_moneda } = req.body;
    try {
        const newTipoMoneda = await TipoMoneda.create({
            id: id,
            nombre_tipo_moneda: nombre_tipo_moneda,
        });
        res.json(newTipoMoneda);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoMoneda = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_tipo_moneda } = req.body;

        const tipoMonedamod = await TipoMoneda.findByPk(id);
        tipoMonedamod.nombre_tipo_moneda = nombre_tipo_moneda;

        await tipoMonedamod.save();

        res.json(tipoMonedamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoMoneda = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoMoneda.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};