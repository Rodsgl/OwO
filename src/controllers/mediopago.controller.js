import { MedioPago } from "../models/MedioPago.js";

export const getMediosPago = async (req, res) => {
    try {
        const mediosPago = await MedioPago.findAll()
        res.json(mediosPago);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getMedioPago = async (req, res) => {
    try {
        const { id } = req.params;
        const medioPago = await MedioPago.findOne({
            where: {
                id: id,
            }
        });

        if (!medioPago) {
            return res.status(404).json({ message: "No existe ese Medio de Pago" });
        }
        res.json(medioPago);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createMedioPago = async (req, res) => {
    const { id,
        medio,
    } = req.body;
    try {
        const newMedioPago = await MedioPago.create({
            id: id,
            medio: medio,
        });
        res.json(newMedioPago);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateMedioPago = async (req, res) => {
    try {
        const { id } = req.params;
        const { medio,
        } = req.body;

        const medioPagomod = await MedioPago.findByPk(id);
        medioPagomod.medio = medio;
        await medioPagomod.save();

        res.json(medioPagomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteMedioPago = async (req, res) => {
    try {
        const { id } = req.params;
        await MedioPago.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};