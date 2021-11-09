const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

mongoose
  .connect(
"mongodb+srv://JeromeGhartey:hello1@cluster0.ddgo2.mongodb.net/furnitureshop?retryWrites=true&w=majority"  )
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", userRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Backend server is running");
});
