import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send("Signup page");
});

authRouter.post("/sign-in", (req, res) => {
  res.write("Signin page");
});

authRouter.post("/sign-out", (req, res) => {
  res.write("Signout page");
});

export default authRouter;
