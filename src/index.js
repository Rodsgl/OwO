import app from "./app.js";
import { sequelize } from "./database/database.js";

// import "./models/Pais.js";
// import "./models/Estado.js";
// import "./models/CategoriaFlujoCaja.js";
// import "./models/TipoDTE.js";
// import "./models/Banco.js";
// import "./models/TipoCuenta.js";
// import "./models/TipoTarjeta.js";
// import "./models/TipoCredito.js";
// import "./models/TipoMoneda.js";
// import "./models/TipoVencimineto.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3008);
    console.log("Servidor conectado en puerto", 3008);
  } catch (error) {
    console.error("conexión fallida", error);
  }
}

main();
