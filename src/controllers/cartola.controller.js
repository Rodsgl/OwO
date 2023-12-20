import { Cartola } from "../models/Cartola.js";

export const getCartolas = async (req, res) => {
  try {
    const cartola = await Cartola.findAll();
    res.json(cartola);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCartola = async (req, res) => {
  try {
    const { id } = req.params;
    const nombre_cartola = await Cartola.findOne({
      where: {
        id: id,
      },
    });

    if (!nombre_cartola) {
      return res.status(404).json({ message: "No existe esa Cartola" });
    }
    res.json(nombre_cartola);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCartola = async (req, res) => {
  const {
    id,
    nro_cuenta,
    fecha_cartola,
    nro_cartola,
    tipo_documento,
    oficina,
    cargo,
    Abono,
    saldo_diario,
    fecha,
    auxiliarId,
  } = req.body;
  try {
    const newCartola = await Cartola.create({
      id: id,

      nro_cuenta: nro_cuenta,
      fecha_cartola: fecha_cartola,
      nro_cartola: nro_cartola,
      tipo_documento: tipo_documento,
      oficina: oficina,
      cargo: cargo,
      Abono: Abono,
      saldo_diario: saldo_diario,
      fecha: fecha,
      auxiliarId: auxiliarId,
    });
    res.json(newCartola);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCartola = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre_banco,
      nro_cuenta,
      fecha_cartola,
      nro_cartola,
      tipo_documento,
      oficina,
      cargo,
      Abono,
      saldo_diario,
      fecha,
      auxiliarId,
    } = req.body;

    const cartolamod = await Cartola.findByPk(id);
    cartolamod.nombre_banco = nombre_banco;
    cartolamod.nro_cuenta = nro_cuenta;
    cartolamod.fecha_cartola = fecha_cartola;
    cartolamod.nro_cartola = nro_cartola;
    cartolamod.tipo_documento = tipo_documento;
    cartolamod.oficina = oficina;
    cartolamod.cargo = cargo;
    cartolamod.Abono = Abono;
    cartolamod.saldo_diario = saldo_diario;
    cartolamod.fecha = fecha;
    cartolamod.auxiliarId = auxiliarId;
    await bancomod.save();

    res.json(cartolamod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCartola = async (req, res) => {
  try {
    const { id } = req.params;
    await Cartola.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
