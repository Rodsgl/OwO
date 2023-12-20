import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Proveedor = sequelize.define("proveedor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rut: {
        type: DataTypes.STRING,
    },
    razon_social: {
        type: DataTypes.STRING,
    },
    folio_dte: {
        type: DataTypes.STRING,
    },
    monto_dte: {
        type: DataTypes.INTEGER,
    },
    fecha_emision: {
        type: DataTypes.DATE,
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
    },
    fecha_gestion: {
        type: DataTypes.DATE,
    },
    concepto: {
        type: DataTypes.STRING,
    },
});
