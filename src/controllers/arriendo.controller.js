import { Arriendo } from "../models/Arriendo.js";

export const getArriendos = async (req, res) => {
  try {
    const arriendo = await Arriendo.findAll();
    res.json(arriendo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArriendo = async (req, res) => {
  try {
    const { id } = req.params;
    const arriendo = await Arriendo.findOne({
      where: {
        id: id,
      },
    });

    if (!arriendo) {
      return res.status(404).json({ message: "No existe ese arriendo" });
    }
    res.json(arriendo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createArriendo = async (req, res) => {
  const {
    id,
    fecha_contrato,
    plazo,
    fecha_vencimiento,
    subarrendador,
    rut_subarrendador,
    propietario,
    rut_propietario,
    rol_propietario,
    direccion,
    garantia,
    fecha_pago_garantia,
    canon,
    dia_pago,
    fecha_inicio_contrato,
    fecha_gestion,
    correo,
    telefono,
    auxiliarId,
    bancoId,
    tipocuentaId,
    tipoMonedaId,
    tipovencimientoId,
  } = req.body;
  try {
    const newArriendo = await Arriendo.create({
      id: id,
      fecha_contrato: fecha_contrato,
      plazo: plazo,
      fecha_vencimiento: fecha_vencimiento,
      subarrendador: subarrendador,
      rut_subarrendador: rut_subarrendador,
      propietario: propietario,
      rut_propietario: rut_propietario,
      rol_propietario: rol_propietario,
      direccion: direccion,
      garantia: garantia,
      fecha_pago_garantia: fecha_pago_garantia,
      canon: canon,
      dia_pago: dia_pago,
      fecha_inicio_contrato: fecha_inicio_contrato,
      fecha_gestion: fecha_gestion,
      correo: correo,
      telefono: telefono,
      auxiliarId: auxiliarId,
      bancoId: bancoId,
      tipocuentaId: tipocuentaId,
      tipoMonedaId: tipoMonedaId,
      tipovencimientoId: tipovencimientoId,
    });
    res.json(newArriendo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArriendo = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fecha_contrato,
      plazo,
      fecha_vencimiento,
      subarrendador,
      rut_subarrendador,
      propietario,
      rut_propietario,
      rol_propietario,
      direccion,
      garantia,
      fecha_pago_garantia,
      canon,
      dia_pago,
      fecha_inicio_contrato,
      fecha_gestion,
      correo,
      telefono,
    } = req.body;

    const arriendomod = await Arriendo.findByPk(id);
    arriendomod.fecha_contrato = fecha_contrato;
    arriendomod.plazo = plazo;
    arriendomod.fecha_vencimiento = fecha_vencimiento;
    arriendomod.subarrendador = subarrendador;
    arriendomod.rut_subarrendador = rut_subarrendador;
    arriendomod.propietario = propietario;

    arriendomod.rut_propietario = rut_propietario;
    arriendomod.rol_propietario = rol_propietario;
    arriendomod.direccion = direccion;
    arriendomod.garantia = garantia;

    arriendomod.fecha_pago_garantia = fecha_pago_garantia;
    arriendomod.canon = canon;
    arriendomod.dia_pago = dia_pago;
    arriendomod.fecha_inicio_contrato = fecha_inicio_contrato;
    arriendomod.fecha_gestion = fecha_gestion;
    arriendomod.correo = correo;
    arriendo.telefono = telefono;
    await arriendomod.save();

    res.json(arriendomod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArriendo = async (req, res) => {
  try {
    const { id } = req.params;
    await Arriendo.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
