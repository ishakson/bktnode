const Product = require("../models/product-model");
const Category = require("../models/category-model");

exports.getProducts = (req, res, next) => {
  Product.getAll()
    .then((products) => {
      res.render("admin/products", {
        title: "admin products",
        path: "/admin/products",
        products: products[0],
        action: req.query.action,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddProduct = (req, res, next) => {
  Category.getAll()
    .then((categories) => {
      res.render("admin/add-product", {
        title: "Add Product",
        path: "/admin/add-product",
        categories: categories[0],
      });
    })
    .catch((err) => {
      console.log(err);
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
  product
    .saveProduct()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  Product.getById(req.params.productid)
    .then((product) => {
      Category.getAll()
        .then((categories) => {
          res.render("admin/edit-product", {
            title: "Edit Product",
            path: "/admin/products",
            product: product[0][0],
            categories: categories[0],
            
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
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
  )
    .then(() => {
      res.redirect("/admin/products?action=edit");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  Product.deleteProduct(req.body.productid)
    .then(() => {
      res.redirect("/admin/products?action=delete");
    })
    .catch((err) => {
      console.log(err);
    });
};
