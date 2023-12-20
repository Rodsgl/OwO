import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cliente } from "./Cliente.js";
import { OrdenDeCompra } from "./OrdenDeCompra.js";
import { Proveedor } from "./Proveedor.js";

export const TipoDTE = sequelize.define("tipo_dte", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cod_dte: {
        type: DataTypes.INTEGER,
    },
    tipo_dte: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
});

TipoDTE.hasMany(Cliente, {
    foreignKey: "tipodteId",
    sourceKey: "id",
});
Cliente.belongsTo(TipoDTE, {
    foreignKey: "tipodteId",
    targetId: "id",
});

TipoDTE.hasMany(Proveedor, {
    foreignKey: "tipodteId",
    sourceKey: "id",
});
Proveedor.belongsTo(TipoDTE, {
    foreignKey: "tipodteId",
    targetId: "id",
});

TipoDTE.hasMany(OrdenDeCompra, {
    foreignKey: "tipodteId",
    sourceKey: "id",
});
OrdenDeCompra.belongsTo(TipoDTE, {
    foreignKey: "tipodteId",
    targetId: "id",
});
