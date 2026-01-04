const express = require("express");
const cors = require("cors");
const guestsRouter = require("./routes/guests");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/guests", guestsRouter);

app.get("/", (req, res) => {
  res.send("Employee Management Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
