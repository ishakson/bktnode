const Product = require("../models/product-model");


exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render("admin/products", {
        title: "Admin Products",
        products: products,
        path: "/admin/products",
        action: req.query.action
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        title: "Add Product",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description,
    );
    product.saveProduct();
    res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
    const product = Product.getById(req.params.productid);
    res.render("admin/edit-product", {
        title: "Edit Product",
        path: "/admin/products",
        product: product
    });
};

exports.postEditProduct = (req, res, next) => {
    Product.updateProduct(req.body.id, req.body.name, req.body.price, req.body.imageUrl, req.body.description);
    res.redirect("/admin/products?action=edit");
};

exports.postDeleteProduct = (req, res, next) => {
    Product.deleteProduct(req.body.productid);
    res.redirect("/admin/products?action=delete");
};