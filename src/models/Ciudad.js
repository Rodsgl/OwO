import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Holding } from "./Holding.js";
import { Empresa } from "./Empresa.js";
import { Sucursal } from "./Sucursal.js";

export const Ciudad = sequelize.define("ciudad", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

Ciudad.hasMany(Holding, {
  foreignKey: "ciudadId",
  sourceKey: "id",
});
Holding.belongsTo(Ciudad, {
  foreignKey: "ciudadId",
  targetId: "id",
});

Ciudad.hasMany(Empresa, {
  foreignKey: "ciudadId",
  sourceKey: "id",
});
Empresa.belongsTo(Ciudad, {
  foreignKey: "ciudadId",
  targetId: "id",
});

Ciudad.hasMany(Sucursal, {
  foreignKey: "ciudadId",
  sourceKey: "id",
});
Sucursal.belongsTo(Ciudad, {
  foreignKey: "ciudadId",
  targetId: "id",
});
