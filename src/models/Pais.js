import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Region } from "./Region.js";

export const Pais = sequelize.define("pais", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

Pais.hasMany(Region, {
  foreignKey: "paisId",
  sourceKey: "id",
});
Region.belongsTo(Pais, {
  foreignKey: "paisId",
  targetId: "id",
});
