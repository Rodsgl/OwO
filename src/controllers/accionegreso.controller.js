import { AccionEgreso } from "../models/AccionEgreso.js";

export const getAccionEgresos = async (req, res) => {
  try {
    const accion = await AccionEgreso.findAll();
    res.json(accion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAccionEgreso = async (req, res) => {
  try {
    const { id } = req.params;
    const accion = await AccionEgreso.findOne({
      where: {
        id: id,
      },
    });

    if (!accion) {
      return res
        .status(404)
        .json({ message: "No existe esa accion de egreso" });
    }
    res.json(accion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAccionEgreso = async (req, res) => {
  const { id, accion } = req.body;
  try {
    const newAccion = await AccionEgreso.create({
      id: id,
      accion: accion,
    });
    res.json(newAccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAccion = async (req, res) => {
  try {
    const { id } = req.params;
    const { accion } = req.body;

    const accionmod = await AccionEgreso.findByPk(id);
    accionmod.accion = accion;

    await accionmod.save();

    res.json(accionmod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletAccion = async (req, res) => {
  try {
    const { id } = req.params;
    await AccionEgreso.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
