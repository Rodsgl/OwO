import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

export const TipoTarjeta = sequelize.define("tipo_tarjeta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_tipo_tarjeta: {
    type: DataTypes.STRING,
  },
});

TipoTarjeta.hasMany(CuentaCorriente, {
  foreignKey: "tipotarjetaId",
  sourceKey: "id",
});
CuentaCorriente.belongsTo(TipoTarjeta, {
  foreignKey: "tipotarjetaId",
  targetId: "id",
});