import { TipoVencimineto } from "../models/TipoVencimineto.js";

export const getTiposVencimiento = async (req, res) => {
    try {
        const tiposVencimiento = await TipoVencimineto.findAll()
        res.json(tiposVencimiento);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoVencimiento = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoVencimiento = await TipoVencimineto.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoVencimiento) {
            return res.status(404).json({ message: "No existe ese tipo de vencimiento" });
        }
        res.json(tipoVencimiento);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoVencimieto = async (req, res) => {
    const { id, nombre_tipo } = req.body;
    try {
        const newTipoVencimiento = await TipoVencimineto.create({
            id: id,
            nombre_tipo: nombre_tipo,
        });
        res.json(newTipoVencimiento);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoVencimiento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_tipo } = req.body;

        const tipoVencimientomod = await TipoVencimineto.findByPk(id);
        tipoVencimientomod.nombre_tipo = nombre_tipo;

        await tipoVencimientomod.save();

        res.json(tipoVencimientomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoVencimiento = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoVencimineto.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};