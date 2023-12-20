import { Prioridad } from "../models/Prioridad.js";

export const getPrioridades = async (req, res) => {
    try {
        const prioridades = await Prioridad.findAll()
        res.json(prioridades);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getPrioridad = async (req, res) => {
    try {
        const { id } = req.params;
        const prioridad = await Prioridad.findOne({
            where: {
                id: id,
            }
        });

        if (!prioridad) {
            return res.status(404).json({ message: "No existe esa prioridad" });
        }
        res.json(prioridad);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPrioridad = async (req, res) => {
    const { id,
        prioridad,
    } = req.body;
    try {
        const newPrioridad = await Prioridad.create({
            id: id,
            prioridad: prioridad,
        });
        res.json(newPrioridad);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updatePrioridad = async (req, res) => {
    try {
        const { id } = req.params;
        const { prioridad,
        } = req.body;

        const Prioridadmod = await Prioridad.findByPk(id);
        Prioridadmod.prioridad = prioridad;

        await Prioridadmod.save();

        res.json(Prioridadmod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePrioridad = async (req, res) => {
    try {
        const { id } = req.params;
        await Prioridad.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};