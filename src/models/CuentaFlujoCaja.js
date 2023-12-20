import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CuentaFlujoCaja = sequelize.define("cuenta_flujo_caja", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cuenta: {
        type: DataTypes.STRING,
    },
});