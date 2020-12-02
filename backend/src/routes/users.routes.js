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
  getUserData,
} = require("../controllers/users.controller");

const auth = require("../middlewares/auth");
router.route("/").get(auth, getUsers).post(auth, createUser);
router.route("/login").post(loginUser);
router.route("/validToken").post(validToken);
router.route("/getUser").get(auth, getUserData);
router
  .route("/:id")
  .get(auth, getUserById)
  .put(auth, updateUser)
  .delete(auth, deleteUser);

module.exports = router;
