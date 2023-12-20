import { CuentaCorriente } from "../models/CuentaCorriente.js";

export const getCuentas = async (req, res) => {
  try {
    const cuenta = await CuentaCorriente.findAll();
    res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = await CuentaCorriente.findOne({
      where: {
        id: id,
      },
    });

    if (!cuenta) {
      return res.status(404).json({ message: "No existe esa cuenta" });
    }
    res.json(cuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCuenta = async (req, res) => {
  const {
    id,
    numero_cuenta,
    ejecutivo_cuenta_corriente,
    fono_ejecutivo,
    sucursal_banco,
    direccion_sucursal,
    ejecutivo_comex,
    correo_ejecutivo_comex,
    fono_ejecutivo_comex,
    sucursal_ejecutivo_comex,
    direccion_ejecutivo_comex,
    linea_sobregiro,
    monto_tarjeta,
    empresaId,
    bancoId,
    tipotarjetaId,
  } = req.body;
  try {
    const newCuenta = await CuentaCorriente.create({
      id: id,
      numero_cuenta: numero_cuenta,
      ejecutivo_cuenta_corriente: ejecutivo_cuenta_corriente,
      fono_ejecutivo: fono_ejecutivo,
      sucursal_banco: sucursal_banco,

      direccion_sucursal: direccion_sucursal,
      ejecutivo_comex: ejecutivo_comex,
      correo_ejecutivo_comex: correo_ejecutivo_comex,
      fono_ejecutivo_comex: fono_ejecutivo_comex,

      sucursal_ejecutivo_comex: sucursal_ejecutivo_comex,
      direccion_ejecutivo_comex: direccion_ejecutivo_comex,
      linea_sobregiro: linea_sobregiro,
      monto_tarjeta: monto_tarjeta,
      empresaId: empresaId,

      bancoId: bancoId,
      tipotarjetaId: tipotarjetaId,
    });
    res.json(newCuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      numero_cuenta,
      ejecutivo_cuenta_corriente,
      fono_ejecutivo,
      sucursal_banco,
      direccion_sucursal,
      ejecutivo_comex,
      correo_ejecutivo_comex,
      fono_ejecutivo_comex,
      sucursal_ejecutivo_comex,
      direccion_ejecutivo_comex,
      linea_sobregiro,
      monto_tarjeta,
      empresaId,
      bancoId,
      tipotarjetaId,
    } = req.body;

    const mod = await CuentaCorriente.findByPk(id);
    mod.numero_cuenta = numero_cuenta;
    mod.ejecutivo_cuenta_corriente = ejecutivo_cuenta_corriente;
    mod.fono_ejecutivo = fono_ejecutivo;
    mod.sucursal_banco = sucursal_banco;
    mod.direccion_sucursal = direccion_sucursal;
    mod.ejecutivo_comex = ejecutivo_comex;
    mod.correo_ejecutivo_comex = correo_ejecutivo_comex;
    mod.fono_ejecutivo_comex = fono_ejecutivo_comex;
    mod.sucursal_ejecutivo_comex = sucursal_ejecutivo_comex;
    mod.direccion_ejecutivo_comex = direccion_ejecutivo_comex;
    mod.linea_sobregiro = linea_sobregiro;
    mod.monto_tarjeta = monto_tarjeta;
    mod.empresaId = empresaId;
    mod.bancoId = bancoId;
    mod.tipotarjetaId = tipotarjetaId;
    await mod.save();

    res.json(mod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    await CuentaCorriente.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
