import e from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.route.js";

const app = e();

app.use('/api/v1/auth', authRouter)

app.get("/", (req, res) => {
  res.send("Welcome to the First Api");
});

app.listen(PORT, () => {
  console.log(`server started running on ${PORT}`);
});
