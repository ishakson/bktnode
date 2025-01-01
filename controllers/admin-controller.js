const Product = require("../models/product-model");
const Category = require("../models/category-model");

exports.getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("admin/products", {
    title: "Admin Products",
    products: products,
    path: "/admin/products",
    action: req.query.action,
  });
};

exports.getAddProduct = (req, res, next) => {
  const categories = Category.getAll();
  res.render("admin/add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    categories: categories,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.imageUrl,
    req.body.description,
    req.body.categoryid
  );
  product.saveProduct();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const product = Product.getById(req.params.productid);
  const categories = Category.getAll();

  res.render("admin/edit-product", {
    title: "Edit Product",
    path: "/admin/products",
    product: product,
    categories: categories,
  });
};

exports.postEditProduct = (req, res, next) => {
  Product.updateProduct(
    req.body.id,
    req.body.name,
    req.body.price,
    req.body.imageUrl,
    req.body.description,
    req.body.categoryid
  );
  res.redirect("/admin/products?action=edit");
};

exports.postDeleteProduct = (req, res, next) => {
  Product.deleteProduct(req.body.productid);
  res.redirect("/admin/products?action=delete");
};
