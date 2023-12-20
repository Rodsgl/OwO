import { Banco } from "../models/Banco.js";

export const getBancos = async (req, res) => {
  try {
    const banco = await Banco.findAll();
    res.json(banco);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBanco = async (req, res) => {
  try {
    const { id } = req.params;
    const nombre_banco = await Banco.findOne({
      where: {
        id: id,
      },
    });

    if (!nombre_banco) {
      return res.status(404).json({ message: "No existe ese Banco" });
    }
    res.json(nombre_banco);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBanco = async (req, res) => {
  const { id, nombre_banco } = req.body;
  try {
    const newBanco = await Banco.create({
      id: id,
      nombre_banco: nombre_banco,
    });
    res.json(newBanco);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBanco = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_banco } = req.body;

    const bancomod = await Banco.findByPk(id);
    bancomod.nombre_banco = nombre_banco;

    await bancomod.save();

    res.json(bancomod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBanco = async (req, res) => {
  try {
    const { id } = req.params;
    await Banco.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
