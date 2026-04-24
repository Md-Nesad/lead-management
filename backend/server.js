require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) => res.send("Hello World!"));

//leads routes
app.use("/api/leads", require("./routes/leadRoutes"));

//not found handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not found" });
});

//error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
