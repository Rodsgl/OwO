import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TablaAmortizacion = sequelize.define("tabla_amortizacion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    nro_cuota: {
        type: DataTypes.INTEGER,
    },
    amortizacion_capital: {
        type: DataTypes.INTEGER,
    },
    interes: {
        type: DataTypes.FLOAT,
    },
    total_cuota: {
        type: DataTypes.INTEGER,
    },
    saldo: {
        type: DataTypes.INTEGER,
    },
});