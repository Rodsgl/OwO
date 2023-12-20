import express from "express";
import categoriasRoutes from "./routes/categorias_flujo_caja.routes.js";
import subcategoriasRoutes from "./routes/subcategorias.routes.js";
import accioneRoutes from "./routes/accionegreso.routes.js";
import accionIngresoRoutes from "./routes/accioningreso.routes.js";
import arriendoRoutes from "./routes/arriendo.routes.js";
import auxiliarFlujoCajaRoutes from "./routes/auxiliarflujocaja.routes.js";
import holdingRoutes from "./routes/holding.routes.js";
import empresaRoutes from "./routes/empresa.routes.js";
import sucursalRoutes from "./routes/sucursal.routes.js";
import bancoRoutes from "./routes/banco.routes.js";
import cartolaRoutes from "./routes/cartola.routes.js";
import chequeraRoutes from "./routes/chequera.routes.js";
import chequesCarteraRoutes from "./routes/chequescartera.routes.js";
import chequesFechaRoutes from "./routes/chequesfecha.routes.js";
import ciudadRoutes from "./routes/ciudad.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import conceptoFlujoCajaRoutes from "./routes/conceptoflujocaja.routes.js";
import cuentaCorrienteRoutes from "./routes/cuentacorriente.routes.js";
import estadoRoutes from "./routes/estado.routes.js";
import flujoDeCajaRoutes from "./routes/flujodecaja.routes.js";
import imposicionRoutes from "./routes/imposicion.routes.js";
import impuestosRoutes from "./routes/impuestos.routes.js";
import medioPagoRoutes from "./routes/mediopago.routes.js";
import ordenDeCompraRoutes from "./routes/ordendecompra.routes.js";
import paisRoutes from "./routes/pais.routes.js";
import prestamoRoutes from "./routes/prestamo.routes.js";
import prioridadRoutes from "./routes/prioridad.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import regionRoutes from "./routes/region.routes.js";
import sueldoRoutes from "./routes/sueldo.routes.js";
import tablaAmortizacionRoutes from "./routes/tablaamortizacion.routes.js";
import tipoCreditoRoutes from "./routes/tipocredito.routes.js";
import tipoCuentaRoutes from "./routes/tipocuenta.routes.js";
import tipoDTERoutes from "./routes/tipodte.routes.js";
import tipoMonedaRoutes from "./routes/tipomoneda.routes.js";
import tipoTarjetaRoutes from "./routes/tipotarjeta.routes.js";
import tipoVencimientoRoutes from "./routes/tipovencimiento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
  res.header("Allow", "GET, POST, PUT, OPTIONS, DELETE");
  next();
});

app.use(express.json());

app.use(categoriasRoutes);
app.use(subcategoriasRoutes);
app.use(holdingRoutes);
app.use(empresaRoutes);
app.use(sucursalRoutes);
app.use(accioneRoutes);
app.use(accionIngresoRoutes);
app.use(arriendoRoutes);
app.use(auxiliarFlujoCajaRoutes);
app.use(bancoRoutes);
app.use(cartolaRoutes);
app.use(chequeraRoutes);
app.use(chequesCarteraRoutes);
app.use(chequesFechaRoutes);
app.use(ciudadRoutes);
app.use(clienteRoutes);
app.use(conceptoFlujoCajaRoutes);
app.use(cuentaCorrienteRoutes);
app.use(estadoRoutes);
app.use(flujoDeCajaRoutes);
app.use(imposicionRoutes);
app.use(impuestosRoutes);
app.use(medioPagoRoutes);
app.use(ordenDeCompraRoutes);
app.use(paisRoutes);
app.use(prestamoRoutes);
app.use(prioridadRoutes);
app.use(proveedorRoutes);
app.use(regionRoutes);
app.use(sueldoRoutes);
app.use(tablaAmortizacionRoutes);
app.use(tipoCreditoRoutes);
app.use(tipoCuentaRoutes);
app.use(tipoDTERoutes);
app.use(tipoMonedaRoutes);
app.use(tipoTarjetaRoutes);
app.use(tipoVencimientoRoutes);
app.use(usuarioRoutes);

export default app;
