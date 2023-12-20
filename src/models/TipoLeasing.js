import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TipoLeasing = sequelize.define("tipoleasing", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING,
  },
});
