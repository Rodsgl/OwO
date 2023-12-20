import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Arriendo } from "./Arriendo.js";

export const TipoVencimineto = sequelize.define("tipo_vencimiento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_tipo: {
        type: DataTypes.STRING,
    },
});

TipoVencimineto.hasMany(Arriendo, {
    foreignKey: "tipovencimientoId",
    sourceKey: "id",
});
Arriendo.belongsTo(TipoVencimineto, {
    foreignKey: "tipovencimientoId",
    targetId: "id",
});
