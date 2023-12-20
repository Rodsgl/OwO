import { ConceptoFlujoCaja } from "../models/ConceptoFlujoCaja.js";

export const getConceptos = async (req, res) => {
  try {
    const concepto = await ConceptoFlujoCaja.findAll();
    res.json(concepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getConcepto = async (req, res) => {
  try {
    const { id } = req.params;
    const concepto = await ConceptoFlujoCaja.findOne({
      where: {
        id: id,
      },
    });

    if (!concepto) {
      return res
        .status(404)
        .json({ message: "No existe esa concepto de flujo de caja" });
    }
    res.json(concepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createConcepto = async (req, res) => {
  const { id, concepto, subCategoriaId } = req.body;
  try {
    const newCOncepto = await ConceptoFlujoCaja.create({
      id: id,
      concepto: concepto,
      subCategoriaId: subCategoriaId,
    });
    res.json(newCOncepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateConcepto = async (req, res) => {
  try {
    const { id } = req.params;
    const { concepto, subCategoriaId } = req.body;

    const mod = await ConceptoFlujoCaja.findByPk(id);
    mod.concepto = concepto;
    mod.subCategoriaId = subCategoriaId;

    await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteConcepto = async (req, res) => {
  try {
    const { id } = req.params;
    await ConceptoFlujoCaja.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
