import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { AuxiliarFlujoCaja } from "./AuxiliarFlujoCaja.js";

export const ConceptoFlujoCaja = sequelize.define("concepto_flujo_caja", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  concepto: {
    type: DataTypes.STRING,
  },
});

ConceptoFlujoCaja.hasMany(AuxiliarFlujoCaja, {
  foreignKey: "conceptoId",
  sourceKey: "id"
});

AuxiliarFlujoCaja.belongsTo(ConceptoFlujoCaja, {
  foreignKey: "conceptoId",
  targetId: "id"
});
