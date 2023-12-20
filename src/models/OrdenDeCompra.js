import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const OrdenDeCompra = sequelize.define("ordendecompra", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rut: {
    type: DataTypes.STRING,
  },
  folio_dte: {
    type: DataTypes.STRING,
  },
  fecha_emision: {
    type: DataTypes.DATE,
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
  },
  fecha_gestion: {
    type: DataTypes.DATE,
  },
  monto_dte: {
    type: DataTypes.INTEGER,
  },
  abono: {
    type: DataTypes.INTEGER,
  },
  saldo: {
    type: DataTypes.INTEGER,
  },
  concepto: {
    type: DataTypes.STRING,
  },
});
