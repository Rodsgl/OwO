import { Usuario } from "../models/Usuario.js";

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}

export const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({
            where: { id: id }
        });
        if (!usuario) {
            return res.status(404).json({ message: "No existe ese usuario" });
        }
        res.json(usuario);

    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}

export const createUsuario = async (req, res) => {
    const { id,
        rut,
        nombre,
        direccion,
        telefono,
        estado,
        cargo,
        sucursalId,
        empresaId } = req.body;

    try {
        const newUsuario = await Usuario.create({
            id: id,
            rut: rut,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            estado: estado,
            cargo: cargo,
            sucursalId: sucursalId,
            empresaId: empresaId,
        });
        res.json(newUsuario);

    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { rut,
            nombre,
            direccion,
            telefono,
            estado,
            cargo,
            sucursalId,
        } = req.body;

        const usuariomod = await Usuario.findByPk(id);
        usuariomod.rut = rut;
        usuariomod.nombre = nombre
        usuariomod.direccion = direccion;
        usuariomod.telefono = telefono;
        usuariomod.estado = estado;
        usuariomod.cargo = cargo;
        usuariomod.sucursalId = sucursalId;

        await usuariomod.save();

        res.json(usuariomod);

    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.destroy({
            where: { id }
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.message || error } })
    }
}