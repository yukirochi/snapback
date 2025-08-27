const express = require("express");

const { hello, Signup } = require("../controllers/controller");

const router = express.Router();

router.get("/hello", hello);
router.get("/signup", Signup);

module.exports = router;
