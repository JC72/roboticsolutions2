const router = require("express").Router();
const infoController = require("../../controllers/infoController");

router.route("/main")
  .post(infoController.create);

module.exports = router;