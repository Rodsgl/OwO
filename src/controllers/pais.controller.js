import { Pais } from "../models/Pais.js";

export const getPaises = async (req, res) => {
  try {
    const paises = await Pais.findAll({
      attributes: ["id", "nombre"],
    });

    res.json(paises);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPais = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findOne({
      where: {
        id: id,
      },
    });

    if (!pais) {
      return res.status(404).json({ message: "No existe esa pais" });
    }
    res.json(pais);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPais = async (req, res) => {
  const { id, nombre } = req.body;
  try {
    const newPais = await Pais.create({
      id: id,
      nombre: nombre,
    });
    console.log(nombre);
    res.json(newPais);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePais = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const paismod = await Pais.findByPk(id);
    paismod.nombre = nombre;

    await paismod.save();

    res.json(paismod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePais = async (req, res) => {
  try {
    const { id } = req.params;
    await Pais.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
