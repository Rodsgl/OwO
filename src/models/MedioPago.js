import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

export const MedioPago = sequelize.define("medio_pago", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  medio: {
    type: DataTypes.STRING,
  },
});
