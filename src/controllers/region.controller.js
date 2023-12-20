import { Pais } from "../models/Pais.js";
import { Region } from "../models/Region.js";

export const getRegiones = async (req, res) => {
  try {
    const regiones = await Region.findAll();
    res.set("Access-Control-Allow-Origin", "*");
    res.json(regiones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRegionPais = async (req, res) => {
  try {
    const { pais } = req.params;

    const paisId = await Pais.findOne({
      where: {
        nombre: pais,
      },
    });

    console.log(paisId.id);
    const region = await Region.findOne({
      where: {
        id: paisId.id,
      },
    });

    return res.json(region);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findOne({
      where: {
        id: id,
      },
    });

    if (!region) {
      return res.status(404).json({ message: "No existe esa region" });
    }
    res.json(region);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRegion = async (req, res) => {
  const { id, nombre, paisId } = req.body;
  try {
    const newRegion = await Region.create({
      id: id,
      nombre: nombre,
      paisId: paisId,
    });
    res.json(newRegion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, paisId } = req.body;

    const regionmod = await Region.findByPk(id);
    regionmod.nombre = nombre;
    regionmod.paisId = paisId;

    await regionmod.save();

    res.json(regionmod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRegion = async (req, res) => {
  try {
    const { id } = req.params;
    await Region.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
