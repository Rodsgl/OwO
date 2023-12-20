import { AccionIngreso } from "../models/AccionIngreso.js";

export const getAccionIngresos = async (req, res) => {
  try {
    const accion = await AccionIngreso.findAll();
    res.json(accion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAccionIngreso = async (req, res) => {
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
        .json({ message: "No existe esa accion de ingreso" });
    }
    res.json(accion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAccionIngreso = async (req, res) => {
  const { id, accion } = req.body;
  try {
    const newAccion = await AccionIngreso.create({
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

    const accionmod = await AccionIngreso.findByPk(id);
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
    await AccionIngreso.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
