import { ChequesFecha } from "../models/ChequesFecha.js";

export const getCheques = async (req, res) => {
  try {
    const cheque = await ChequesFecha.findAll();
    res.json(cheque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCheque = async (req, res) => {
  try {
    const { id } = req.params;
    const cheque = await ChequesFecha.findOne({
      where: {
        id: id,
      },
    });

    if (!cheque) {
      return res.status(404).json({ message: "No existe ese cheque" });
    }
    res.json(cheque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCheque = async (req, res) => {
  const {
    id,
    rut_cliente,
    razon_social,
    nro_serie_cheque,
    fecha_emision,
    fecha_vencimiento,
    fecha_gestion,
    monto,
    folio_DTE,
    concepto,
    auxiliarId,
    estadoId,
  } = req.body;
  try {
    const newCheque = await ChequesFecha.create({
      id: id,
      rut_cliente: rut_cliente,
      razon_social: razon_social,
      nro_serie_cheque: nro_serie_cheque,
      fecha_emision: fecha_emision,
      fecha_vencimiento: fecha_vencimiento,
      fecha_gestion: fecha_gestion,
      monto: monto,
      folio_DTE: folio_DTE,
      concepto: concepto,
      auxiliarId: auxiliarId,
      estadoId: estadoId,
    });
    res.json(newCheque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCheque = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rut_cliente,
      razon_social,
      nro_serie_cheque,
      fecha_emision,
      fecha_vencimiento,
      fecha_gestion,
      monto,
      folio_DTE,
      concepto,
      auxiliarId,
      estadoId,
    } = req.body;

    const mod = await ChequesFecha.findByPk(id);
    mod.rut_cliente = rut_cliente;
    mod.razon_social = razon_social;
    mod.nro_serie_cheque = nro_serie_cheque;
    mod.fecha_emision = fecha_emision;
    mod.fecha_vencimiento = fecha_vencimiento;
    mod.fecha_gestion = fecha_gestion;
    mod.monto = monto;
    mod.folio_DTE = folio_DTE;
    mod.concepto = concepto;
    mod.auxiliarId = auxiliarId;
    mod.estadoId = estadoId;
    await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deteleChequera = async (req, res) => {
  try {
    const { id } = req.params;
    await ChequeCartera.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
