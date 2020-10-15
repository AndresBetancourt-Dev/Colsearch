const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  validToken,
} = require("../controllers/users.controller");

const auth = require("../middlewares/auth");
router.route("/").get(getUsers).post(createUser);
router.route("/login").post(loginUser);
router.route("/validToken").post(validToken);
router.route("/:id").get(getUserById).put(updateUser).delete(auth, deleteUser);

module.exports = router;
