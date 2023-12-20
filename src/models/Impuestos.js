import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Ciudad } from "./Ciudad.js";
import { Empresa } from "./Empresa.js";

export const Impuestos = sequelize.define("impuestos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: {
    type: DataTypes.STRING,
  },
  tipo_impuesto: {
    type: DataTypes.FLOAT,
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
  monto: {
    type: DataTypes.FLOAT,
  },
  concepto: {
    type: DataTypes.STRING,
  },
});