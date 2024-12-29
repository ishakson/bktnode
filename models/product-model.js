const products = [
    {id:"1", name: "Product 1", price: "10.00", imageUrl: "1.jpg", description: "Lorem ipsum dol adipiscing eli"},
    {id:"2", name: "Product 2", price: "20.00", imageUrl: "2.jpg", description: "Lorem ipsum dol adipiscing eli"}
];

module.exports = class Product {
    constructor(name, price, imageUrl, description) {
        this.id = Math.floor(Math.random() * 9999)+1;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    saveProduct() {
        products.push(this);
    }

    static getAll(){
        return products;
    }
    static getById(id){
        return products.find(product => product.id === id);
    }
};
