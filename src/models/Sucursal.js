import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { FlujoDeCaja } from "./FlujoDeCaja.js";
import { Usuario } from "./Usuario.js";

export const Sucursal = sequelize.define("sucursal", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
  },
  fono_contacto: {
    type: DataTypes.INTEGER,
  },
});

Sucursal.hasMany(FlujoDeCaja, {
  foreignKey: "sucursalId",
  sourceKey: "id",
});
FlujoDeCaja.belongsTo(Sucursal, {
  foreignKey: "sucursalId",
  targetId: "id",
});

Sucursal.hasMany(Usuario, {
  foreignKey: { name: "sucursalId" },
  sourceKey: "id",
});
Usuario.belongsTo(Sucursal, {
  foreignKey: { name: "sucursalId" },
  targetId: "id",
});