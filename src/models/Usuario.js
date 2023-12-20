import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rut: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.STRING,
    },
});
