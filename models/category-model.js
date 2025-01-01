
var categories = [
    { id: "1", name: "telefon" , description: "Lorem ipsum dol adipiscing eli"},
    { id: "2", name: "Category 2" , description: "Lorem ipsum dol adipiscing eli"},
    { id: "3", name: "Category 3" , description: "Lorem ipsum dol adipiscing eli"},
]
module.exports = class Category {
  constructor(name, description) {
    this.id = (Math.floor(Math.random() * 9999) + 1).toString();
    this.name = name;
    this.description = description;
  }

  save() {
    categories.push(this);
  }

  static getAll() {
    return categories;
  }

  static getById(id) {
    return categories.find(category => category.id === id);
  }

  static update(id, name, description) {
    const category = Category.getById(id);
    category.name = name;
    category.description = description;
  }

  static delete(id) {
    categories.splice(
      categories.findIndex(category => category.id === id),
      1
    );
  }
};
