const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/products/:category", (req, res) => {
  const cate = req.params.category;
  const q = "select * from products where category= ?";
  db.query(q, [cate], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/edit/:id", (req, res) => {
  const cate = req.params.id;
  const q = "select * from products where productid= ?";
  db.query(q, [cate], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.delete("/dashborad/:id", (req, res) => {
  const cate = req.params.id;
  const q = "delete from products where productid= ?";
  db.query(q, [cate], (err, data) => {
    if (err) return res.json(err);
    return res.json('Deleted sucessfully');
  });
});
app.put("/edit/:id", (req, res) => {
  const cate = req.params.id;
  const q =
    "UPDATE products SET productName=?,img=?,count=?,category=?,discription=?,rating=?,rate=?,discount=? WHERE productid= ?";
  const values = [
    req.body.productName,
    req.body.img,
    req.body.count,
    req.body.category,
    req.body.discription,
    req.body.rating,
    req.body.rate,
    req.body.discount,
  ];

  db.query(q, [ ...values , cate], (err, data) => {
    if (err) return res.json(err);
    return res.json('updated successfully');
  });
});
app.post("/add", (req, res) => {
  const q =
    "insert into products (productName,img,count,category,discription,rating,rate,discount) value (?)";
  const values = [
    req.body.productName,
    req.body.img,
    req.body.count,
    req.body.category,
    req.body.discription,
    req.body.rating,
    req.body.rate,
    req.body.discount,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("added successfully");
  });
});

app.get("/panners", (req, res) => {
  const q = "SELECT * FROM panners";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8080, () => {
  console.log("connected to backend");
});
