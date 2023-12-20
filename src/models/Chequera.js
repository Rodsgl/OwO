import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Chequera = sequelize.define("chequera", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero_cuenta: {
    type: DataTypes.INTEGER,
  },
  fecha_chequera: {
    type: DataTypes.DATE,
  },
  serie_inicial: {
    type: DataTypes.INTEGER,
  },
  serie_final: {
    type: DataTypes.INTEGER,
  },
  numero_cheques: {
    type: DataTypes.INTEGER,
  },
});
