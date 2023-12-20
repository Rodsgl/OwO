import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { TablaAmortizacion } from "./TablaAmortizacion.js";

export const Prestamo = sequelize.define("prestamo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nro_operacion: {
        type: DataTypes.STRING,
    },
    cuota_mensual: {
        type: DataTypes.INTEGER,
    },
    interes: {
        type: DataTypes.FLOAT,
    },
    cuotas: {
        type: DataTypes.INTEGER,
    },
    capital: {
        type: DataTypes.INTEGER,
    },
    fecha_contrato: {
        type: DataTypes.DATE,
    },
    comision_y_gastos: {
        type: DataTypes.INTEGER,
    },
});

Prestamo.hasMany(TablaAmortizacion, {
    foreignKey: "prestamoId",
    sourceKey: "id",
});
TablaAmortizacion.belongsTo(Prestamo, {
    foreignKey: "prestamoId",
    targetId: "id",
});