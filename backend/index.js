const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

app.use(express.json());

app.use(cors());

app.use("/Images", express.static("./Images"));

//img upoad
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname.replace(/\.[^/.]+$/, "") +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
let maxSize = 2 * 1000 * 1000;
const upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize,
  },
  fileFilter: function (req, file, cb) {
    let filetypes = /jpeg|jpg|png/;
    let mimetype = filetypes.test(file.mimetype);
    let extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb("Error: File upload only supports the following filetypes:" + filetypes);
  },
}).single("image");

app.post("/upload", upload, (req, res, next) => {
  return res.send(req.file.path);
});

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
    return res.json("Deleted sucessfully");
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

  db.query(q, [...values, cate], (err, data) => {
    if (err) return res.json(err);
    return res.json("updated successfully");
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
app.post("/register", async (req, res) => {
  const qur = "select userEmail from users where userEmail = ?";
  const mail = req.body.userEmail; 

  db.query(qur,[mail], async(err, data) => {
    if (err) return res.json(err);
    regMail = await data;
    if (regMail.length < 1) {
      const q = "insert into users (userName,userPassword,userEmail) value (?)";
      const values = [
        req.body.userName,
        req.body.userPassword,
        req.body.userEmail,
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Registered successfully");
      });
    } else {
      return res.json("Email id Not available Please use different mail");
    }
  });
});
app.post("/signin", (req, res) => {
  const q = "select * from users where userEmail= ? and userPassword =?";
  db.query(q, [req.body.userEmail, req.body.userPPassword], (err, data) => {
    if (err) return res.json({ Message: "Erro inside the server" });
    if (data.length > 0) {
      return res.json({ Login: "true" });
    } else {
      return res.json({ Login: "false" });
    }
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
