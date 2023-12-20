import { TipoDTE } from "../models/TipoDTE.js";

export const getTiposDTE = async (req, res) => {
    try {
        const tiposDTE = await TipoDTE.findAll()
        res.json(tiposDTE);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoDTE = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoDTE = await TipoDTE.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoDTE) {
            return res.status(404).json({ message: "No existe ese DTE" });
        }
        res.json(tipoDTE);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoDTE = async (req, res) => {
    const { id, cod_dte, tipo_dte, descripcion } = req.body;
    try {
        const newTipoDTE = await TipoDTE.create({
            id: id,
            cod_dte: cod_dte,
            tipo_dte: tipo_dte,
            descripcion: descripcion,
        });
        res.json(newTipoDTE);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoDTE = async (req, res) => {
    try {
        const { id } = req.params;
        const { cod_dte, tipo_dte, descripcion } = req.body;

        const tipoDTEmod = await TipoDTE.findByPk(id);
        tipoDTEmod.cod_dte = cod_dte;
        tipoDTEmod.tipo_dte = tipo_dte;
        tipoDTEmod.descripcion = descripcion;

        await tipoDTEmod.save();

        res.json(tipoDTEmod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoDTE = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoDTE.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};