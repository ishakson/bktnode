const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/", (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    const products = [
        {name: "samsunggalaxy", price: "1000", image: "1.jpg", description: "samsung galaxy s10"},
        {name: "iphone", price: "2000", image: "2.jpg", description: "iphone x"},
        {name: "samsunggalaxy", price: "1000", image: "3.jpg", description: "samsung galaxy s10"},
        {name: "iphone", price: "2000", image: "4.jpg", description: "iphone x"}
    ]
    
    res.render("index", { title: "Home", products: products });
});

module.exports = router;
