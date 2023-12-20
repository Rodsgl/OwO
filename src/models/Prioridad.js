import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Prioridad = sequelize.define("prioridad", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prioridad: {
    type: DataTypes.STRING,
  },
});
