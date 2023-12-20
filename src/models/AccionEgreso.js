import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const AccionEgreso = sequelize.define("accion_egreso", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accion: {
    type: DataTypes.STRING,
  },
});
