const connection = require("../utility/database");

const products = [];
module.exports = class Product {
  constructor(name, price, imageUrl, description, category) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.category = category;
  }
  saveProduct() {
    return connection.execute(
      "INSERT INTO products (name, price, imageUrl, description, categoryid) VALUES (?,?,?,?,?)",
      [this.name, this.price, this.imageUrl, this.description, this.category]
    )
  }

  static getAll() {
    return connection.execute("SELECT * FROM products");
  }
  static getById(id) {
    return connection.execute("SELECT * FROM products WHERE id = ?", [id]);
  }

  static updateProduct(id, name, price, imageUrl, description, category) {
    return connection.execute(
      "UPDATE products SET products.name = ?, products.price = ?, products.imageUrl = ?, products.description = ? , products.categoryid = ? WHERE products.id = ?",
      [name, price, imageUrl, description, category, id]
    );
  }

  static deleteProduct(id) {
    return connection.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  static getProductsByCategory(categoryId) {
    return connection.execute("SELECT * FROM products WHERE categoryid = ?", [categoryId]);
  }
};
