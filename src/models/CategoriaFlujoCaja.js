import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { SubCategoriaFlujoCaja } from "./SubCategoriaFlujoCaja.js";

export const CategoriaFlujoCaja = sequelize.define("categoria_flujo_caja", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoria: {
        type: DataTypes.STRING,
    },
});

CategoriaFlujoCaja.hasMany(SubCategoriaFlujoCaja, {
    foreignKey: "categoriaId",
    sourceKey: "id"
});

SubCategoriaFlujoCaja.belongsTo(CategoriaFlujoCaja, {
    foreignKey: "categoriaId",
    targetId: "id"
});