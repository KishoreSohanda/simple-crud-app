const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});

mongoose
  .connect(
    "mongodb+srv://kishoresohanda100:kX3OuKrKvhZnKQk3@backenddb.l3tsv8b.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Database connection failed!");
  });
