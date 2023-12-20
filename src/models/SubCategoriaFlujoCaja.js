import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { AuxiliarFlujoCaja } from "./AuxiliarFlujoCaja.js";
import { ConceptoFlujoCaja } from "./ConceptoFlujoCaja.js";

export const SubCategoriaFlujoCaja = sequelize.define("subcategoria_flujo_caja", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    subcategoria: {
        type: DataTypes.STRING,
    },
});

SubCategoriaFlujoCaja.hasMany(ConceptoFlujoCaja, {
    foreignKey: "subCategoriaId",
    sourceKey: "id"
});

ConceptoFlujoCaja.belongsTo(SubCategoriaFlujoCaja, {
    foreignKey: "subCategoriaId",
    targetId: "id"
});

SubCategoriaFlujoCaja.hasMany(AuxiliarFlujoCaja, {
    foreignKey: "subCategoriaId",
    sourceKey: "id"
})
AuxiliarFlujoCaja.belongsTo(SubCategoriaFlujoCaja, {
    foreignKey: "subCategoriaId",
    targetId: "id"
})