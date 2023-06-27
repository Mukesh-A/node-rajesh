const mongodb = require("./MongoDb");
const express = require("express");
const path = require("path");
const mongodbs = require("mongodb");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//node js
// const http = require("http");

// http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(JSON.stringify({ name: "mukesh", email: "mukesh" }));
//   res.end();
// }).listen(2000);

// const fs = require("fs");
// const data = process.argv;
// // fs.writeFileSync(data[2], data[3])
// fs.unlinkSync("Mukesh.txt")

// const path = require("path");
// const fs = require("fs");
// const { error, dir } = require("console");
// const dirpath = path.join(__dirname);
// const filePath = `${dirpath}/test.txt`;
// console.log(dirpath);

// write file
// fs.writeFileSync(filePath,'Hey')

//read file
// fs.readFile(filePath,'utf-8',(error,item)=>{
//     console.log(item);
// })

//append

// fs.appendFile(filePath,'update',(err)=>{
//     if(!err)console.log("updated");
// })

//rename file

// fs.rename(filePath,`${dirpath}/fruit.txt`,(error)=>{
//     if(!error)console.log("renamed");
// })

//delete file
// fs.unlinkSync(`${dirpath}/fruit.txt`)

//settimeout

// console.log("1");

// setTimeout(()=>{
//     console.log("2");
// },2000)
// console.log("3");

//promise

// let a = 10;
// let b = 10;

// let getData = new Promise((res, req) => {
//   setTimeout(() => {
//     res(30);
//   }, 2000);
// });
// getData.then((dat) => {
//   b = dat;
//   console.log(a + b);
// });

// const publicpath = path.join(__dirname, "public");

// app.set("view engine", "ejs");
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "rajesh",
//     age: "34",
//   };
//   res.render("profile", { user });
// });

// const refField = (req, res, next) => {
//   // console.log("middle");
//   if(!req.query.age){
//     res.send("please provide age")
//   }else{

//     next();
//   }
// };
// app.use(refField);
// app.get("", (_, res) => {
//   res.send("home")

// });

//insert
// async function insert() {
//   const db = await mongodb();
//   const result = await db.insertOne({ name: "mukesh" });
//   if (result.acknowledged) {
//     console.log(result);
//   } else {
//     console.log("something went wrong");
//   }
// }
// insert();

//read
// const ReadData = async ()=>{
//   let data = await mongodb();
//   data =await data.find({name: 'mukesh'}).toArray();
//   console.log(data)
// }
// ReadData();

//update

// const updateData = async () => {
//   let data = await mongodb();
//   let result = await data.updateOne(
//     {
//       name: "mukesh",
//     },
//     { $set: { name: "MUKESHAA" } }
//   );
//   console.warn(result);
// };
// updateData();

//delet

// const deleteData = async ()=>{
//   let data = await mongodb();
//   let deletes = await data.deleteOne({name:"mukesh"})
//   console.log(deletes)
// }
// deleteData();

//API WITH MONGOOO

//read

// app.get("/", async (req, res) => {
//   let data = await mongodb();
//   data = await data.find().toArray();
//   console.log(data);
//   res.send(data);
// });

//insert

// app.post("/", async (req, res) => {
//   // console.log(req.body);
//   // res.send({ name: "mukesh" }); // when u using post man u will get the response their but hw will you know in the browser so use of express.json

//   let data = await mongodb();
//   let result = await data.insertOne(req.body);
//   console.log(result);
 
 
// });


//update
// app.put("/", async (req, resp) => {
//   let data = await mongodb();
//   let result = await data.updateOne(
//     {
//       name: req.body.name,
//     },
//     { $set: req.body }
//   );
//   console.log(result);
//   resp.send({ result: "update" });
// });


//delet
// app.delete("/:id", async (req, res) => {
//   console.log(req.params.id);
//   let data = await mongodb();
//   const result = await data.deleteOne({
//     _id: new mongodbs.ObjectId(req.params.id),
//   });
//   res.send(result);
// });



//mongoose

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-comm");

// const ProductSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
// });

// const main = async () => {
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = new ProductsModel({ name: "m8" });
//   let result = await data.save();

//   console.log(result);
// };

// const UpdateInDb = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = await Product.updateOne(
//     { name: "iphone" },
//     { $set: { price: 10 } }
//   );
//   console.log(data);
// };

// const deleteInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = await Product.deleteOne({ name: "iphone" });
//   console.log(data);
// };

// const findInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   const data = await Product.find({ name: "Kumar" });
//   console.log(data);
// };

// findInDB();





app.listen(3000);
