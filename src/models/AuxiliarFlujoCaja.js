import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Arriendo } from "./Arriendo.js";
import { Cartola } from "./Cartola.js";
import { ChequesCartera } from "./ChequesCartera.js";
import { ChequesFecha } from "./ChequesFecha.js";
import { Cliente } from "./Cliente.js";
import { FlujoDeCaja } from "./FlujoDeCaja.js";
import { Imposiciones } from "./Imposiciones.js";
import { Impuestos } from "./Impuestos.js";
import { OrdenDeCompra } from "./OrdenDeCompra.js";
import { Prestamo } from "./Prestamo.js";
import { Proveedor } from "./Proveedor.js";
import { Sueldos } from "./Sueldos.js";

export const AuxiliarFlujoCaja = sequelize.define("auxiliar_flujo_caja", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  auxiliar: {
    type: DataTypes.STRING,
  },
});

AuxiliarFlujoCaja.hasMany(FlujoDeCaja, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
FlujoDeCaja.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Cliente, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Cliente.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Proveedor, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Proveedor.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Prestamo, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Prestamo.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Impuestos, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Impuestos.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Sueldos, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Sueldos.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Imposiciones, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Imposiciones.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Cartola, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Cartola.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(ChequesCartera, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
ChequesCartera.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(ChequesFecha, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
ChequesFecha.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(OrdenDeCompra, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
OrdenDeCompra.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});

AuxiliarFlujoCaja.hasMany(Arriendo, {
  foreignKey: "auxiliarId",
  sourceKey: "id",
});
Arriendo.belongsTo(AuxiliarFlujoCaja, {
  foreignKey: "auxiliarId",
  targetId: "id",
});
