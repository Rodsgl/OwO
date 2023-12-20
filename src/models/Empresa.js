import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Sucursal } from "./Sucursal.js";
import { FlujoDeCaja } from "./FlujoDeCaja.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Usuario } from "./Usuario.js";

export const Empresa = sequelize.define("empresa", {
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

Empresa.hasMany(Sucursal, {
  foreignKey: { name: "empresaId", allowNull: false },
  sourceKey: "id",
});

Sucursal.belongsTo(Empresa, {
  foreignKey: { name: "empresaId", allowNull: false },
  targetId: "id",
});

Empresa.hasMany(FlujoDeCaja, {
  foreignKey: "empresaId",
  sourceKey: "id",
});
FlujoDeCaja.belongsTo(Empresa, {
  foreignKey: "empresaId",
  targetId: "id",
});

Empresa.hasMany(CuentaCorriente, {
  foreignKey: "empresaId",
  sourceKey: "id",
});
CuentaCorriente.belongsTo(Empresa, {
  foreignKey: "empresaId",
  targetId: "id",
});

Empresa.hasMany(Usuario, {
  foreignKey: { name: "empresaId" },
  sourceKey: "id",
});
Usuario.belongsTo(Empresa, {
  foreignKey: { name: "empresaId" },
  targetId: "id",
});