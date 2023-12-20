import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ChequesCartera } from "./ChequesCartera.js";
import { ChequesFecha } from "./ChequesFecha.js";
import { Cliente } from "./Cliente.js";
import { Imposiciones } from "./Imposiciones.js";
import { Impuestos } from "./Impuestos.js";
import { OrdenDeCompra } from "./OrdenDeCompra.js";
import { Proveedor } from "./Proveedor.js";
import { Sueldos } from "./Sueldos.js";

export const Estado = sequelize.define("estado", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estado: {
        type: DataTypes.STRING,
    },
});

Estado.hasMany(Cliente, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Cliente.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(Proveedor, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Proveedor.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(ChequesCartera, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
ChequesCartera.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(ChequesFecha, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
ChequesFecha.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(Imposiciones, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Imposiciones.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(Impuestos, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Impuestos.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(Proveedor, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Proveedor.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(Sueldos, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
Sueldos.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});

Estado.hasMany(OrdenDeCompra, {
    foreignKey: "estadoId",
    sourceKey: "id"
});
OrdenDeCompra.belongsTo(Estado, {
    foreignKey: "estadoId",
    targetId: "id"
});