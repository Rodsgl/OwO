import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Imposiciones = sequelize.define("imposiciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: {
    type: DataTypes.STRING,
  },
  monto_cotizacion: {
    type: DataTypes.FLOAT,
  },
  abono_cotizacion: {
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
    type: DataTypes.INTEGER,
  },
});
