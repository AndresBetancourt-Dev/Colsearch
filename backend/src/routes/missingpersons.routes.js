const { Router } = require("express");
const router = Router();
const {
  createMissingPerson,
  getMissingPersons,
  getMissingPerson,
  updateMissingPerson,
  deleteMissingPerson,
} = require("../controllers/missingpersons.controller");

router.route("/").get(getMissingPersons).post(createMissingPerson);

router
  .route("/:id")
  .get(getMissingPerson)
  .put(updateMissingPerson)
  .delete(deleteMissingPerson);

module.exports = router;
