import e from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.route.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import productsRouter from "./routes/products.route.js";

const app = e();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(e.json());
app.use(e.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productsRouter)

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the First Api");
});

app.listen(PORT, () => {
  console.log(`server started running on ${PORT}`);

  connectToDatabase();
});
