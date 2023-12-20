import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Arriendo } from "./Arriendo.js";
import { Prestamo } from "./Prestamo.js";

export const TipoMoneda = sequelize.define("tipo_moneda", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_tipo_moneda: {
        type: DataTypes.STRING,
    },
});

TipoMoneda.hasMany(Prestamo, {
    foreignKey: "tipoMonedaId",
    sourceKey: "id",
});
Prestamo.belongsTo(TipoMoneda, {
    foreignKey: "tipoMonedaId",
    targetId: "id",
});

TipoMoneda.hasMany(Arriendo, {
    foreignKey: "tipoMonedaId",
    sourceKey: "id",
});
Arriendo.belongsTo(TipoMoneda, {
    foreignKey: "tipoMonedaId",
    targetId: "id",
});