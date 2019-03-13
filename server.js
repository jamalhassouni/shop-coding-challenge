const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const shops = require("./routes/api/shops");

const app = express();

// DB Config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

// Use Routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/shops", shops);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
