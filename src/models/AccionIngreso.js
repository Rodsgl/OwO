import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AccionIngreso = sequelize.define("accion_ingreso", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accion: {
    type: DataTypes.STRING,
  },
});
