import { CategoriaFlujoCaja } from "../models/CategoriaFlujoCaja.js";

export const getCategorias = async (req, res) => {
    try {
        const categorias = await CategoriaFlujoCaja.findAll()
        res.json(categorias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaFlujoCaja.findOne({
            where: {
                id: id,
            }
        });

        if (!categoria) {
            return res.status(404).json({ message: "No existe esa categoria" });
        }
        res.json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createCategoria = async (req, res) => {
    const { id, categoria } = req.body;
    try {
        const newCategoria = await CategoriaFlujoCaja.create({
            id: id,
            categoria: categoria,
        });
        res.json(newCategoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoria } = req.body;

        const categoriamod = await CategoriaFlujoCaja.findByPk(id);
        categoriamod.categoria = categoria;

        await categoriamod.save();

        res.json(categoriamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await CategoriaFlujoCaja.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};