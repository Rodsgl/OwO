import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Arriendo } from "./Arriendo.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Prestamo } from "./Prestamo.js";

export const Banco = sequelize.define("banco", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_banco: {
    type: DataTypes.STRING,
  },
});

Banco.hasMany(Prestamo, {
  foreignKey: "bancoId",
  sourceKey: "id",
});
Prestamo.belongsTo(Banco, {
  foreignKey: "bancoId",
  targetId: "id",
});

Banco.hasMany(CuentaCorriente, {
  foreignKey: "bancoId",
  sourceKey: "id",
});
CuentaCorriente.belongsTo(Banco, {
  foreignKey: "bancoId",
  targetId: "id",
});

Banco.hasMany(Arriendo, {
  foreignKey: "bancoId",
  sourceKey: "id",
});
Arriendo.belongsTo(Banco, {
  foreignKey: "bancoId",
  targetId: "id",
});