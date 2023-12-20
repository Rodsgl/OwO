import { SubCategoriaFlujoCaja } from "../models/SubCategoriaFlujoCaja.js";

export const getSubcategorias = async (req, res) => {
    try {
        const subcategorias = await SubCategoriaFlujoCaja.findAll()
        res.json(subcategorias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getSubcategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const subcategoria = await SubCategoriaFlujoCaja.findOne({
            where: {
                id: id,
            }
        });

        if (!subcategoria) {
            return res.status(404).json({ message: "No existe esa subcategoria" });
        }
        res.json(subcategoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSubcategoria = async (req, res) => {
    const { id, subcategoria, categoriaId } = req.body;
    try {
        const newSubcategoria = await SubCategoriaFlujoCaja.create({
            id: id,
            subcategoria: subcategoria,
            categoriaId: categoriaId,
        });
        res.json(newSubcategoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateSubcategoria = async (req, res) => {
    try {
        const { id } = req.params;
        //const { subcategoria } = req.body;

        const subcategoriamod = await SubCategoriaFlujoCaja.findByPk(id);
        subcategoriamod.set(req.body);

        await subcategoriamod.save();

        return res.json(subcategoriamod);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteSubcategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await SubCategoriaFlujoCaja.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};