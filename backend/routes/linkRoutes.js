const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/linkController");
const auth = require("../middleware/authMiddleware");
const rateLimit = require("../middleware/rateLimit");

router.get("/get-link", rateLimit, ctrl.getLink);

router.post("/add", auth, ctrl.addLink);
router.get("/all", auth, ctrl.getAllLinks);
router.delete("/:id", auth, ctrl.deleteLink);

module.exports = router;