import { Proveedor } from "../models/Proveedor.js";

export const getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll()
        res.json(proveedores);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.findOne({
            where: {
                id: id,
            }
        });

        if (!proveedor) {
            return res.status(404).json({ message: "No existe ese proveedor" });
        }
        res.json(proveedor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createProveedor = async (req, res) => {
    const { id,
        rut,
        razon_social,
        folio_dte,
        fecha_emision,
        fecha_vencimieto,
        fecha_gestion,
        concepto,
        estadoId,
        auxiliarId,
        tipodteId,
    } = req.body;
    try {
        const newProveedor = await Proveedor.create({
            id: id,
            rut: rut,
            razon_social: razon_social,
            folio_dte: folio_dte,
            fecha_emision: fecha_emision,
            fecha_vencimieto: fecha_vencimieto,
            fecha_gestion: fecha_gestion,
            concepto: concepto,
            estadoId: estadoId,
            auxiliarId: auxiliarId,
            tipodteId: tipodteId,
        });
        res.json(newProveedor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { rut,
            razon_social,
            folio_dte,
            fecha_emision,
            fecha_vencimieto,
            fecha_gestion,
            concepto,
            estadoId,
            auxiliarId,
            tipodteId,
        } = req.body;

        const proveedormod = await Proveedor.findByPk(id);
        proveedormod.rut = rut;
        proveedormod.razon_social = razon_social;
        proveedormod.folio_dte = folio_dte;
        proveedormod.fecha_emision = fecha_emision;
        proveedormod.fecha_vencimieto = fecha_vencimieto;
        proveedormod.fecha_gestion = fecha_gestion;
        proveedormod.concepto = concepto;
        proveedormod.estadoId = estadoId;
        proveedormod.auxiliarId = auxiliarId;
        proveedormod.tipodteId = tipodteId;

        await proveedormod.save();

        res.json(proveedormod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        await Proveedor.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};