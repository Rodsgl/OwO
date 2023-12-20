import { Ciudad } from "../models/Ciudad.js";

export const getCiudades = async (req, res) => {
  try {
    const ciudad = await Ciudad.findAll();
    res.json(ciudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const ciudad = await Ciudad.findOne({
      where: {
        id: id,
      },
    });

    if (!ciudad) {
      return res.status(404).json({ message: "No existe esa ciudad" });
    }
    res.json(ciudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCiudad = async (req, res) => {
  const { id, nombre, regionId } = req.body;
  try {
    const newCiudad = await Ciudad.create({
      id: id,
      nombre: nombre,
      regionId: regionId,
    });
    res.json(newCiudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, regionId } = req.body;

    const mod = await Ciudad.findByPk(id);
    mod.nombre = nombre;
    mod.regionId = regionId;
    await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    await Ciudad.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
