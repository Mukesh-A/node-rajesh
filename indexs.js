const express = require("express");
require("./config");
const Product = require("./productSchema");
console.log("hhh");

const app = express();
app.use(express.json());
app.post("/", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

///FIND
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

//delete

app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

//put

app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.listen(3000);
