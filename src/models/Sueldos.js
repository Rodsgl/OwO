import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Sueldos = sequelize.define("sueldos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: {
    type: DataTypes.STRING,
  },

  liquido_a_pagar: {
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
  concepto: {
    type: DataTypes.STRING,
  },
});
