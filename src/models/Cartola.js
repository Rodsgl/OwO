import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Cartola = sequelize.define("cartola", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nro_cuenta: {
        type: DataTypes.STRING,
    },
    fecha_cartola: {
        type: DataTypes.DATE,
    },
    nro_cartola: {
        type: DataTypes.STRING,
    },
    tipo_documento: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    oficina: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.INTEGER,
    },
    Abono: {
        type: DataTypes.INTEGER,
    },
    saldo_diario: {
        type: DataTypes.INTEGER,
    },
    fecha: {
        type: DataTypes.DATE,
    },
});