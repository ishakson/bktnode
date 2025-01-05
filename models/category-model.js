const connection = require("../utility/database");

module.exports = class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  save() {
    return connection.execute(
      "INSERT INTO categories (name, description) VALUES (?,?)",
      [this.name, this.description]
    );
  }

  static getAll() {
    return connection.execute("SELECT * FROM categories");
  }

  static getById(id) {
    return connection.execute("SELECT * FROM categories WHERE id = ?", [id]);
  }

  static update(id, name, description) {
    return connection.execute(
      "UPDATE categories SET categories.name = ?, categories.description = ? WHERE categories.id = ?",
      [name, description, id]
    );
  }

  static delete(id) {
    return connection.execute("DELETE FROM categories WHERE id = ?", [id]);
  }
};
