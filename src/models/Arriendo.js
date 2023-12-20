import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Arriendo = sequelize.define("arriendo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha_contrato: {
    type: DataTypes.DATE,
  },
  plazo: {
    type: DataTypes.STRING,
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
  },
  subarrendador: {
    type: DataTypes.STRING,
  },
  rut_subarrendador: {
    type: DataTypes.STRING,
  },
  propietario: {
    type: DataTypes.STRING,
  },
  rut_propietario: {
    type: DataTypes.STRING,
  },
  rol_propietario: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  garantia: {
    type: DataTypes.INTEGER,
  },
  fecha_pago_garantia: {
    type: DataTypes.DATE,
  },
  canon: {
    type: DataTypes.INTEGER,
  },
  dia_pago: {
    type: DataTypes.INTEGER,
  },
  fecha_inicio_contrato: {
    type: DataTypes.DATE,
  },
  fecha_gestion: {
    type: DataTypes.DATE,
  },
  correo: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
});
