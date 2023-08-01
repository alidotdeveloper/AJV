const express = require("express");
const validateDto = require("../middleware/validate-dto");
const userSchema = require("../Schema/user");
const userController = require("../controller/user-controller");

const router = express.Router();

router.post("/", validateDto(userSchema), userController.register);

module.exports = router;
