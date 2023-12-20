import { Chequera } from "../models/Chequera.js";

export const getChequeras = async (req, res) => {
  try {
    const chequeras = await Chequera.findAll();
    res.json(chequeras);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getChequera = async (req, res) => {
  try {
    const { id } = req.params;
    const chequera = await Chequera.findOne({
      where: {
        id: id,
      },
    });

    if (!chequera) {
      return res.status(404).json({ message: "No existe esa chequera" });
    }
    res.json(chequera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createChequera = async (req, res) => {
  const {
    id,
    numero_cuenta,
    fecha_chequera,
    serie_inicial,
    serie_final,
    numero_cheques,
    cuentacorrienteId,
  } = req.body;
  try {
    const newChequera = await Chequera.create({
      id: id,
      numero_cuenta: numero_cuenta,
      fecha_chequera: fecha_chequera,
      serie_inicial: serie_inicial,
      serie_final: serie_final,
      numero_cheques: numero_cheques,
      cuentacorrienteId: cuentacorrienteId,
    });
    res.json(newChequera);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateChequera = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      numero_cuenta,
      fecha_chequera,
      serie_inicial,
      serie_final,
      numero_cheques,
      cuentacorrienteId,
    } = req.body;

    const chequeramod = await Chequera.findByPk(id);
    chequeramod.numero_cuenta = numero_cuenta;
    chequeramod.fecha_chequera = fecha_chequera;
    chequeramod.serie_inicial = serie_inicial;
    chequeramod.serie_final = serie_final;
    chequeramod.numero_cheques = numero_cheques;
    chequeramod.cuentacorrienteId = cuentacorrienteId;
    await chequeramod.save();

    return res.json(chequeramod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteChequera = async (req, res) => {
  try {
    const { id } = req.params;
    await Chequera.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
