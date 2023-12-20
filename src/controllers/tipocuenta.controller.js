import { TipoCuenta } from "../models/TipoCuenta.js";

export const getTiposCuenta = async (req, res) => {
    try {
        const tiposCuenta = await TipoCuenta.findAll()
        res.json(tiposCuenta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTipoCuenta = async (req, res) => {
    try {
        const { id } = req.params;
        const tipoCuenta = await TipoCuenta.findOne({
            where: {
                id: id,
            }
        });

        if (!tipoCuenta) {
            return res.status(404).json({ message: "No existe ese tipo de Cuenta" });
        }
        res.json(tipoCuenta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTipoCuenta = async (req, res) => {
    const { id, nombre_tipo_cuenta } = req.body;
    try {
        const newTipoCuenta = await TipoCuenta.create({
            id: id,
            nombre_tipo_cuenta: nombre_tipo_cuenta,
        });
        res.json(newTipoCuenta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTipoCuenta = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_tipo_cuenta } = req.body;

        const tipoCuentamod = await TipoCuenta.findByPk(id);
        tipoCuentamod.nombre_tipo_cuenta = nombre_tipo_cuenta;

        await tipoCuentamod.save();

        res.json(tipoCuentamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTipoCuenta = async (req, res) => {
    try {
        const { id } = req.params;
        await TipoCuenta.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};