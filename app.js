const express = require("express");
const exHbs = require("express-handlebars");
const products = require("./products.json");

const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exHbs({
    extname: "hbs",
  })
);

app.listen(4646, () => {
  console.log(`Application server is running on port ${4444}`);
});

app.get("/", (req, res) => {
  res.render("home", { nameTitle: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { nameTitle: "About" });
});

app.get("/products", (req, res) => {
  res.render("products", {
    products,
    cssFileName: "products",
    nameTitle: "Products",
  });
});

app.get("/product/:productId", (req, res) => {
  const product = products.find((p) => p.id === req.params.productId);

  res.render("product", { product });
});
