const MissingPerson = require("../models/MissingPerson");
const MissingPersons = {};

MissingPersons.createMissingPerson = async (req, res) => {
  try {
    const {
      name,
      surname,
      identificationCard,
      approved,
      found,
      description,
      imageUrl,
      contact,
      email,
      location,
    } = req.body;

    if (!name || !surname || !identificationCard) {
      res.status(400).json({
        message:
          "Debes ingresar el nombre, apellido y al menos un identificador para poder localizar a esta persona",
      });
    }

    const newMissingPerson = new MissingPerson({
      name,
      surname,
      identificationCard,
      approved,
      found,
      description,
      imageUrl,
      contact,
      email,
      location,
    });

    await newMissingPerson.save();
    res.json({ message: "Registro agregado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

MissingPersons.getMissingPersons = async (req, res) => {
  try {
    const missingPerson = await MissingPerson.find();
    res.json(missingPerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

MissingPersons.getMissingPerson = async (req, res) => {
  try {
    const missingPerson = await MissingPerson.findById(req.params.id);
    if (missingPerson) {
      res.json(missingPerson);
    } else {
      res.json({ message: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

MissingPersons.updateMissingPerson = async (req, res) => {
  try {
    const {
      name,
      surname,
      identificationCard,
      approved,
      found,
      description,
      imageUrl,
      contact,
      email,
      location,
    } = req.body;

    await MissingPerson.findByIdAndUpdate(req.params.id, {
      name,
      surname,
      identificationCard,
      approved,
      found,
      description,
      imageUrl,
      contact,
      email,
      location,
    });
    res.json({ message: "Registro Actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

MissingPersons.deleteMissingPerson = async (req, res) => {
  try {
    await MissingPerson.findByIdAndDelete(req.params.id);
    res.json({ message: "Registro Eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = MissingPersons;
