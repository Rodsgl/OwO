import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Prestamo } from "./Prestamo.js";

export const TipoCredito = sequelize.define("tipo_credito", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_tipo_credito: {
        type: DataTypes.STRING,
    },
});

TipoCredito.hasMany(Prestamo, {
    foreignKey: "tipoCreditoId",
    sourceKey: "id",
});
Prestamo.belongsTo(TipoCredito, {
    foreignKey: "tipoCreditoId",
    targetId: "id",
});