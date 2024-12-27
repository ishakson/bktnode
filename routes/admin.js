const express = require('express');
const router = express.Router();

const products = [
        {name: "samsunggalaxy", price: "1000", image: "1.jpg", description: "samsung galaxy s10"},
        {name: "iphone", price: "2000", image: "2.jpg", description: "iphone x"},
        {name: "samsunggalaxy", price: "1000", image: "3.jpg", description: "samsung galaxy s10"},
        {name: "iphone", price: "2000", image: "4.jpg", description: "iphone x"}
    ]

// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
   // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render("add-product", { title: "Add Product" });
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    // database kayıt
    
   products.push({name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;