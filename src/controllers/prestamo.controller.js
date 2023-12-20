import { Prestamo } from "../models/Prestamo.js";

export const getPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll()
        res.json(prestamos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getPrestamo = async (req, res) => {
    try {
        const { id } = req.params;
        const prestamo = await Prestamo.findOne({
            where: {
                id: id,
            }
        });

        if (!prestamo) {
            return res.status(404).json({ message: "No existe ese prestamo" });
        }
        res.json(prestamo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPrestamo = async (req, res) => {
    const { id,
        nro_operacion,
        cuota_mensual,
        interes,
        cuotas,
        capital,
        fecha_contrato,
        comision_y_gastos,
        auxiliarId,
        bancoId,
        tipoCreditoId,
        tipoMonedaId,
    } = req.body;
    try {
        const newPrestamo = await Prestamo.create({
            id: id,
            nro_operacion: nro_operacion,
            cuota_mensual: cuota_mensual,
            interes: interes,
            cuotas: cuotas,
            capital: capital,
            fecha_contrato: fecha_contrato,
            comision_y_gastos: comision_y_gastos,
            auxiliarId: auxiliarId,
            bancoId: bancoId,
            tipoCreditoId: tipoCreditoId,
            tipoMonedaId: tipoMonedaId,
        });
        res.json(newPrestamo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updatePrestamo = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nro_operacion,
            cuota_mensual,
            interes,
            cuotas,
            capital,
            fecha_contrato,
            comision_y_gastos,
            auxiliarId,
            bancoId,
            tipoCreditoId,
            tipoMonedaId,

        } = req.body;

        const prestamomod = await Prestamo.findByPk(id);
        prestamomod.nro_operacion = nro_operacion;
        prestamomod.cuota_mensual = cuota_mensual;
        prestamomod.interes = interes;
        prestamomod.cuotas = cuotas;
        prestamomod.capital = capital;
        prestamomod.fecha_contrato = fecha_contrato;
        prestamomod.comision_y_gastos = comision_y_gastos;
        prestamomod.auxiliarId = auxiliarId;
        prestamomod.bancoId = bancoId;
        prestamomod.tipoCreditoId = tipoCreditoId;
        prestamomod.tipoMonedaId = tipoMonedaId;

        await prestamomod.save();

        res.json(prestamomod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePrestamo = async (req, res) => {
    try {
        const { id } = req.params;
        await Prestamo.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};