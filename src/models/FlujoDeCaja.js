import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const FlujoDeCaja = sequelize.define("flujodecaja", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});
