import { Impuestos } from "../models/Impuestos.js";

export const getImpuestos = async (req, res) => {
    try {
        const impuestos = await Impuestos.findAll()
        res.json(impuestos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getImpuesto = async (req, res) => {
    try {
        const { id } = req.params;
        const impuesto = await Impuestos.findOne({
            where: {
                id: id,
            }
        });

        if (!impuesto) {
            return res.status(404).json({ message: "No existe ese Impuesto" });
        }
        res.json(impuesto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createImpuesto = async (req, res) => {
    const { id,
        mes,
        tipo_impuesto,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        monto,
        concepto,
        auxiliarId,
        estadoId,
    } = req.body;
    try {
        const newImpuesto = await Impuestos.create({
            id: id,
            mes: mes,
            tipo_impuesto: tipo_impuesto,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            monto: monto,
            concepto: concepto,
            auxiliarId: auxiliarId,
            estadoId: estadoId,
        });
        res.json(newImpuesto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateImpuesto = async (req, res) => {
    try {
        const { id } = req.params;
        const { mes,
            tipo_impuesto,
            fecha_emision,
            fecha_vencimieto,
            fecha_gestion,
            monto,
            concepto,
            auxiliarId,
            estadoId,
        } = req.body;

        const impuestomod = await Impuestos.findByPk(id);
        impuestomod.mes = mes;
        impuestomod.tipo_impuesto = tipo_impuesto;
        impuestomod.fecha_emision = fecha_emision;
        impuestomod.fecha_vencimieto = fecha_vencimieto;
        impuestomod.fecha_gestion = fecha_gestion;
        impuestomod.monto = monto;
        impuestomod.concepto = concepto;
        impuestomod.auxiliarId = auxiliarId;
        impuestomod.estadoId = estadoId;

        await impuestomod.save();

        res.json(impuestomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteImpuesto = async (req, res) => {
    try {
        const { id } = req.params;
        await Impuestos.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};