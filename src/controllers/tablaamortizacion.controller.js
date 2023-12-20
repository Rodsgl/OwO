import { TablaAmortizacion } from "../models/TablaAmortizacion.js";

export const getTablasAmortizacion = async (req, res) => {
    try {
        const tablasAmortizacion = await TablaAmortizacion.findAll()
        res.json(tablasAmortizacion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTablaAmortizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const tablaAmortizacion = await TablaAmortizacion.findOne({
            where: {
                id: id,
            }
        });

        if (!tablaAmortizacion) {
            return res.status(404).json({ message: "No existe esa tabla de amortizacion" });
        }
        res.json(tablaAmortizacion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTablaAmortizacion = async (req, res) => {
    const { id,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        nro_cuota,
        amortizacion_capital,
        interes,
        total_cuota,
        saldo
    } = req.body;
    try {
        const newTablaAmortizacion = await TablaAmortizacion.create({
            id: id,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            nro_cuota: nro_cuota,
            amortizacion_capital: amortizacion_capital,
            interes: interes,
            total_cuota: total_cuota,
            saldo: saldo,
        });
        res.json(newTablaAmortizacion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTablaAmortizacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha_emision } = req.body;

        const TablaAmortizacionmod = await TablaAmortizacion.findByPk(id);
        TablaAmortizacionmod.fecha_emision = fecha_emision;
        TablaAmortizacionmod.fecha_vencimieto = fecha_vencimieto;
        TablaAmortizacionmod.fecha_gestion = fecha_gestion;
        TablaAmortizacionmod.nro_cuota = nro_cuota;
        TablaAmortizacionmod.amortizacion_capital = amortizacion_capital;
        TablaAmortizacionmod.interes = interes;
        TablaAmortizacionmod.total_cuota = total_cuota;
        TablaAmortizacionmod.saldo = saldo;

        await TablaAmortizacionmod.save();

        res.json(TablaAmortizacionmod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTablaAmortizacion = async (req, res) => {
    try {
        const { id } = req.params;
        await TablaAmortizacion.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};