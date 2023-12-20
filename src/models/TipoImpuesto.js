import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TipoImpuesto = sequelize.define("tipo_impuesto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sigla: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
});
