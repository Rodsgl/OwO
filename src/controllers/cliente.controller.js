import { Cliente } from "../models/Cliente.js";

export const getClientes = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({
      where: {
        id: id,
      },
    });

    if (!cliente) {
      return res.status(404).json({ message: "No existe ese cliente" });
    }
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  const {
    id,
    rut,
    razon_social,
    folio_dte,
    fecha_emision,
    fecha_vencimiento,
    fecha_gestion,
    concepto,
    estadoId,
    auxiliarId,
    tipodteId,
  } = req.body;
  try {
    const newCliente = await Cliente.create({
      id: id,
      rut: rut,
      razon_social: razon_social,
      folio_dte: folio_dte,
      fecha_emision: fecha_emision,
      fecha_vencimiento: fecha_vencimiento,
      fecha_gestion: fecha_gestion,
      concepto: concepto,
      estadoId: estadoId,
      auxiliarId: auxiliarId,
      tipodteId: tipodteId,
    });
    res.json(newCliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rut,
      razon_social,
      folio_dte,
      fecha_emision,
      fecha_vencimiento,
      fecha_gestion,
      concepto,
      estadoId,
      auxiliarId,
      tipodteId,
    } = req.body;

    const mod = await Cliente.findByPk(id);
    (mod.rut = rut),
      (mod.razon_social = razon_social),
      (mod.folio_dte = folio_dte),
      (mod.fecha_emision = fecha_emision),
      (mod.fecha_vencimiento = fecha_vencimiento),
      (mod.fecha_gestion = fecha_gestion),
      (mod.concepto = concepto),
      (mod.estadoId = estadoId),
      (mod.auxiliarId = auxiliarId),
      (mod.tipodteId = tipodteId),
      await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await Cliente.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
