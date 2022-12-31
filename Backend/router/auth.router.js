const express = require("express");
const { signupUser, loginUser, getUser } = require("../controller/auth.controller");
let authRouter = express.Router();

authRouter.post("/signup", signupUser)
authRouter.post("/login", loginUser)
authRouter.get("/users", getUser)

  module.exports = authRouter