import { Imposiciones } from "../models/Imposiciones.js";

export const getImposiciones = async (req, res) => {
    try {
        const imposiciones = await Imposiciones.findAll()
        res.json(imposiciones);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getImposicion = async (req, res) => {
    try {
        const { id } = req.params;
        const imposicion = await Imposiciones.findOne({
            where: {
                id: id,
            }
        });

        if (!imposicion) {
            return res.status(404).json({ message: "No existe esa Imposición." });
        }
        res.json(imposicion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createImposicion = async (req, res) => {
    const { id,
        mes,
        monto_cotizacion,
        abono_cotizacion,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        concepto,
        auxiliarId,
        estadoId,
    } = req.body;
    try {
        const newImposicion = await Imposiciones.create({
            id: id,
            mes: mes,
            monto_cotizacion: monto_cotizacion,
            abono_cotizacion: abono_cotizacion,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            concepto: concepto,
            auxiliarId: auxiliarId,
            estadoId: estadoId,
        });
        res.json(newImposicion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateImposicion = async (req, res) => {
    try {
        const { id } = req.params;
        const { mes,
            monto_cotizacion,
            abono_cotizacion,
            fecha_emision,
            fecha_vencimieto,
            fecha_gestion,
            concepto,
            auxiliarId,
            estadoId,
        } = req.body;

        const imposicionmod = await Imposiciones.findByPk(id);
        imposicionmod.mes = mes;
        imposicionmod.monto_cotizacion = monto_cotizacion;
        imposicionmod.abono_cotizacion = abono_cotizacion;
        imposicionmod.fecha_emision = fecha_emision;
        imposicionmod.fecha_vencimieto = fecha_vencimieto;
        imposicionmod.fecha_gestion = fecha_gestion;
        imposicionmod.concepto = concepto;
        imposicionmod.auxiliarId = auxiliarId;
        imposicionmod.estadoId = estadoId;

        await imposicionmod.save();

        res.json(imposicionmod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteImposicion = async (req, res) => {
    try {
        const { id } = req.params;
        await Imposiciones.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};