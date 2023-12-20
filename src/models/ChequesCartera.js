import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ChequesCartera = sequelize.define("cheques_cartera", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rut_cliente: {
        type: DataTypes.STRING,
    },
    razon_social: {
        type: DataTypes.STRING,
    },
    nro_serie_cheque: {
        type: DataTypes.STRING,
    },
    fecha_emision: {
        type: DataTypes.DATE,
    },
    fecha_vencimieto: {
        type: DataTypes.DATE,
    },
    fecha_gestion: {
        type: DataTypes.DATE,
    },
    monto: {
        type: DataTypes.INTEGER,
    },
    folio_DTE: {
        type: DataTypes.STRING,
    },
    concepto: {
        type: DataTypes.STRING,
    },
});