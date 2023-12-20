import { AuxiliarFlujoCaja } from "../models/AuxiliarFlujoCaja.js";

export const getAuxiliarFlujoCajas = async (req, res) => {
  try {
    const auxiliar = await AuxiliarFlujoCaja.findAll();
    res.json(auxiliar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAuxiliarFlujoCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const auxiliar = await AuxiliarFlujoCaja.findOne({
      where: {
        id: id,
      },
    });

    if (!auxiliar) {
      return res.status(404).json({ message: "No existe esa categoria" });
    }
    res.json(categoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAuxiliarFlujoCaja = async (req, res) => {
  const { id, auxiliar, conceptoId, subCategoriaId } = req.body;
  try {
    const newAuxiliar = await AuxiliarFlujoCaja.create({
      id: id,
      auxiliar: auxiliar,
      conceptoId: conceptoId,
      subCategoriaId: subCategoriaId,
    });
    res.json(newAuxiliar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAuxiliarFlujoCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const { auxiliar, conceptoId, subCategoriaId } = req.body;

    const auxiliarmod = await AuxiliarFlujoCaja.findByPk(id);
    auxiliarmod.auxiliar = auxiliar;
    auxiliarmod.conceptoId = conceptoId;
    auxiliarmod.subCategoriaId = subCategoriaId;

    await auxiliarmod.save();

    res.json(auxiliarmod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAuxiliarFlujoCaja = async (req, res) => {
  try {
    const { id } = req.params;
    await AuxiliarFlujoCaja.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
