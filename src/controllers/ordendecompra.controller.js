import { OrdenDeCompra } from "../models/OrdenDeCompra.js";

export const getOrdenesDeCompra = async (req, res) => {
    try {
        const ordenesdecompra = await OrdenDeCompra.findAll()
        res.json(ordenesdecompra);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getOrdenDeCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const ordendecompra = await OrdenDeCompra.findOne({
            where: {
                id: id,
            }
        });

        if (!ordendecompra) {
            return res.status(404).json({ message: "No existe esa Orden de Compra" });
        }
        res.json(ordendecompra);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createOrdenDeCompra = async (req, res) => {
    const { id,
        rut,
        folio_dte,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        monto_dte,
        abono,
        saldo,
        concepto,
        auxiliarId,
        estadoId,
        tipodteId,
    } = req.body;
    try {
        const newOrdenDeCompra = await OrdenDeCompra.create({
            id: id,
            rut: rut,
            folio_dte: folio_dte,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            monto_dte: monto_dte,
            abono: abono,
            saldo: saldo,
            concepto: concepto,
            auxiliarId: auxiliarId,
            estadoId: estadoId,
            tipodteId: tipodteId,
        });
        res.json(newOrdenDeCompra);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateOrdenDeCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const { rut,
            folio_dte,
            fecha_emision,
            fecha_vencimieto,
            fecha_gestion,
            monto_dte,
            abono,
            saldo,
            concepto,
            auxiliarId,
            estadoId,
            tipodteId,
        } = req.body;

        const ordendecompramod = await OrdenDeCompra.findByPk(id);
        ordendecompramod.rut = rut;
        ordendecompramod.folio_dte = folio_dte;
        ordendecompramod.fecha_emision = fecha_emision;
        ordendecompramod.fecha_vencimieto = fecha_vencimieto;
        ordendecompramod.fecha_gestion = fecha_gestion;
        ordendecompramod.monto_dte = monto_dte;
        ordendecompramod.abono = abono;
        ordendecompramod.saldo = saldo;
        ordendecompramod.concepto = concepto;
        ordendecompramod.auxiliarId = auxiliarId;
        ordendecompramod.estadoId = estadoId;
        ordendecompramod.tipodteId = tipodteId;

        await ordendecompramod.save();

        res.json(ordendecompramod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteOrdenDeCompra = async (req, res) => {
    try {
        const { id } = req.params;
        await OrdenDeCompra.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};