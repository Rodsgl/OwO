import { TipoCredito } from "../models/TipoCredito.js";

export const getTiposCredito = async (req, res) => {
    try {
        const tiposCredito = await TipoCredito.findAll()
        res.json(tiposCredito);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoCredito = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoCredito = await TipoCredito.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoCredito) {
            return res.status(404).json({ message: "No existe ese tipo de credito" });
        }
        res.json(tipoCredito);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoCredito = async (req, res) => {
    const { id, nombre_tipo_credito } = req.body;
    try {
        const newTipoCredito = await TipoCredito.create({
            id: id,
            nombre_tipo_credito: nombre_tipo_credito,
        });
        res.json(newTipoCredito);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoCredito = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_tipo_credito } = req.body;

        const tipoCreditomod = await TipoCredito.findByPk(id);
        tipoCreditomod.nombre_tipo_credito = nombre_tipo_credito;

        await tipoCreditomod.save();

        res.json(tipoCreditomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoCredito = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoCredito.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};