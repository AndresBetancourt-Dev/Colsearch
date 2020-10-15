const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const Users = {};

Users.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

Users.createUser = async (req, res) => {
  try {
    let { username, password, name } = req.body;

    if (!username || !password) {
      res.status(400);
      return res.json({
        message: "Debes especificar el usuario y la contraseña",
      });
    }
    if (password.length < 6) {
      res.status(400);
      return res.json({ message: "La contraseña es muy corta" });
    }
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      res.status(400);
      return res.json({ message: "Este usuario ya existe" });
    }
    if (!name) {
      name = username;
    }
    const passwordHash = await Users.hashPassword(password);
    const newUser = new User({
      username,
      password: passwordHash,
      name,
    });
    await newUser.save();
    return res.json({ message: "Usuario Creado", newUser });
  } catch (error) {
    res.status(500);
    return res.json({ message: error.message });
  }
};

Users.hashPassword = async (password) => {
  const salt = await bycrypt.genSalt(10);
  const passwordHash = await bycrypt.hash(password, salt);
  return passwordHash;
};

Users.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res
        .status(400)
        .json({ message: "Debes especificar usuario y constraseña" });
    }
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(400);
      res.json({ message: "Usuario no encontrado" });
    }
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400);
      res.json({ message: "Credenciales Inválidas" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

Users.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "Usuario no Encontrado" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

Users.updateUser = async (req, res) => {
  try {
    let { username, password, name } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: "Debes especificar usuario y contraseña" });
    }
    if (password.length < 6) {
      res.status(400).json({ message: "La contraseña es muy corta" });
    }
    if (!name) {
      name = username;
    }

    const passwordHash = await Users.hashPassword(password);

    await User.findByIdAndUpdate(req.params.id, {
      username,
      password: passwordHash,
      name,
    });
    res.json({ message: "Usuario Actualizado" });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

Users.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuario Eliminado" });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

Users.validToken = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.json(false);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json(false);
    }
    const user = await User.findById(verified.id);
    if (!user) {
      return res.json(false);
    }
    return res.json(true);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = Users;
