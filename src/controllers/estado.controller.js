import { Estado } from "../models/Estado.js";

export const getEstados = async (req, res) => {
  try {
    const estado = await Estado.findAll();
    res.json(estado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await Estado.findOne({
      where: {
        id: id,
      },
    });

    if (!estado) {
      return res.status(404).json({ message: "No existe ese estado" });
    }
    res.json(estado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEstado = async (req, res) => {
  const { id, estado } = req.body;
  try {
    const newEstado = await Estado.create({
      id: id,

      estado: estado,
    });
    res.json(newEstado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const mod = await Estado.findByPk(id);
    mod.estado = estado;

    await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEstado = async (req, res) => {
  try {
    const { id } = req.params;
    await Estado.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
