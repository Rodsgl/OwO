import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Empresa } from "./Empresa.js";

export const Holding = sequelize.define("holding", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  razon_social: {
    type: DataTypes.STRING,
  },
  rut: {
    type: DataTypes.STRING,
  },
  giro: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  fono_contacto: {
    type: DataTypes.INTEGER,
  },
});

Holding.hasMany(Empresa, {
  foreignKey: "holdingId",
  sourceKey: "id",
});
Empresa.belongsTo(Holding, {
  foreignKey: "holdingId",
  targetId: "id",
});
