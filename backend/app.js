import e from "express";

const app = e();

app.get("/", (req, res) => {
  res.send("Welcome to the First Api");
});

app.listen(5000, () => {
  console.log("server started running");
});
