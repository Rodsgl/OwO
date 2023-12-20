import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Arriendo } from "./Arriendo.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

export const TipoCuenta = sequelize.define("tipo_cuenta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_tipo_cuenta: {
    type: DataTypes.STRING,
  },
});

TipoCuenta.hasMany(CuentaCorriente, {
  foreignKey: "tipocuentaId",
  sourceKey: "id",
});
CuentaCorriente.belongsTo(TipoCuenta, {
  foreignKey: "tipocuentaId",
  targetId: "id",
});

TipoCuenta.hasMany(Arriendo, {
  foreignKey: "tipocuentaId",
  sourceKey: "id",
});
Arriendo.belongsTo(TipoCuenta, {
  foreignKey: "tipocuentaId",
  targetId: "id",
});