import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Chequera } from "./Chequera.js";

export const CuentaCorriente = sequelize.define("cuenta_corriente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero_cuenta: {
    type: DataTypes.INTEGER,
  },
  ejecutivo_cuenta_corriente: {
    type: DataTypes.STRING,
  },
  fono_ejecutivo: {
    type: DataTypes.INTEGER,
  },
  sucursal_banco: {
    type: DataTypes.STRING,
  },
  direccion_sucursal: {
    type: DataTypes.STRING,
  },
  ejecutivo_comex: {
    type: DataTypes.STRING,
  },
  correo_ejecutivo_comex: {
    type: DataTypes.STRING,
  },
  fono_ejecutivo_comex: {
    type: DataTypes.INTEGER,
  },
  sucursal_ejecutivo_comex: {
    type: DataTypes.STRING,
  },
  direccion_ejecutivo_comex: {
    type: DataTypes.STRING,
  },
  linea_sobregiro: {
    type: DataTypes.INTEGER,
  },
  monto_tarjeta: {
    type: DataTypes.INTEGER,
  },
});

CuentaCorriente.hasMany(Chequera, {
  foreignKey: "cuentacorrienteId",
  sourceKey: "id",
});
Chequera.belongsTo(CuentaCorriente, {
  foreignKey: "cuentacorrienteId",
  targetId: "id",
});
