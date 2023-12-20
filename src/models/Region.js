import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Ciudad } from "./Ciudad.js";
export const Region = sequelize.define("region", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

Region.hasMany(Ciudad, {
  foreignKey: "regionId",
  sourceKey: "id",
});
Ciudad.belongsTo(Region, {
  foreignKey: "regionId",
  targetId: "id",
});
