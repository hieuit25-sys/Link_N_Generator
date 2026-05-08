const express = require("express");

const router = express.Router();

const linkController = require("../controllers/linkController");

const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/get-link",
  linkController.getLink
);

router.get(
  "/all",
  authMiddleware,
  linkController.getAllLinks
);

router.post(
  "/add",
  linkController.addLink
);

router.delete(
  "/:id",
  authMiddleware,
  linkController.deleteLink
);

module.exports = router;