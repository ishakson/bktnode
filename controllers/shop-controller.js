const Product = require("../models/product-model");
const Category = require("../models/category-model");

exports.getIndex = (req, res, next) => {
  Category.getAll()
    .then((categories) => {
      Product.getAll()
        .then((products) => {
          res.render("shop/index", {
            title: "Shopping",
            products: products[0],
            categories: categories[0],
            path: "/",
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Category.getAll()
    .then((categories) => {
      Product.getAll()
        .then((products) => {
          res.render("shop/products", {
            title: "Products",
            products: products[0],
            categories: categories[0],
            path: "/products",
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.getProductsByCategory = (req, res, next) => {
  const categoryId = req.params.categoryid;
  Promise.all([
    Product.getProductsByCategory(categoryId),
    Category.getAll(),
  ])
    .then(([products, categories]) => {
      res.render("shop/products", {
        title: "Products",
        products: products[0],
        categories: categories[0],
        selectedCategory: categoryId,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productid;
  Product.getById(productId)
    .then((product) => {
      if (!product[0][0]) {
        return res.status(404).render("404", { title: "Product Not Found", path: "/404" });
      }
      res.render("shop/product-detail", {
        title: product[0][0].name,
        product: product[0][0],
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    title: "Cart",
    path: "/cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    title: "Orders",
    path: "/orders",
  });
};
