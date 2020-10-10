const User = require("../models/User");
const Users = {};

Users.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: "There was an error with the Database" });
  }
};

Users.createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = new User({
      username,
    });
    await newUser.save();
    res.json({ message: "User Created" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

Users.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "User Not Found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

Users.updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
      username,
    });
    res.json({ message: "User Updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

Users.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = Users;
