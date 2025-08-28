const express = require("express");

const { hello, Signup,Login } = require("../controllers/controller");

const router = express.Router();

router.get("/hello", hello);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
