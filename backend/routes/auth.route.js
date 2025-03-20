import { Router } from "express";
import { signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", (req, res) => {
  res.write("Signin page");
});

authRouter.post("/sign-out", (req, res) => {
  res.write("Signout page");
});

export default authRouter;
