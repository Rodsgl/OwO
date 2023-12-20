import { Sueldos } from "../models/Sueldos.js";

export const getSueldos = async (req, res) => {
    try {
        const sueldos = await Sueldos.findAll()
        res.json(sueldos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getSueldo = async (req, res) => {
    try {
        const { id } = req.params;
        const sueldo = await Sueldos.findOne({
            where: {
                id: id,
            }
        });

        if (!sueldo) {
            return res.status(404).json({ message: "No existe ese Sueldo" });
        }
        res.json(sueldo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSueldo = async (req, res) => {
    const { id,
        mes,
        liquido_a_pagar,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        concepto,
        auxiliarId,
        estadoId,
    } = req.body;
    try {
        const newSueldo = await Sueldos.create({
            id: id,
            mes: mes,
            liquido_a_pagar: liquido_a_pagar,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            concepto: concepto,
            auxiliarId: auxiliarId,
            estadoId: estadoId,
        });
        res.json(newSueldo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateSueldo = async (req, res) => {
    try {
        const { id } = req.params;
        const { mes,
            liquido_a_pagar,
            fecha_emision,
            fecha_vencimieto,
            fecha_gestion,
            concepto,
            auxiliarId,
            estadoId,
        } = req.body;

        const sueldomod = await Sueldos.findByPk(id);
        sueldomod.mes = mes;
        sueldomod.liquido_a_pagar = liquido_a_pagar;
        sueldomod.fecha_emision = fecha_emision;
        sueldomod.fecha_vencimieto = fecha_vencimieto;
        sueldomod.fecha_gestion = fecha_gestion;
        sueldomod.concepto = concepto;
        sueldomod.auxiliarId = auxiliarId;
        sueldomod.estadoId = estadoId;

        await sueldomod.save();

        res.json(sueldomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteSueldo = async (req, res) => {
    try {
        const { id } = req.params;
        await Sueldos.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};