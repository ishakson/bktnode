const products = [
    {id:"1", name: "Product 1", price: "10.00", imageUrl: "1.jpg", description: "Lorem ipsum dol adipiscing eli", category: "1"},
    {id:"2", name: "Product 2", price: "20.00", imageUrl: "2.jpg", description: "Lorem ipsum dol adipiscing eli", category: "2"},
];

module.exports = class Product {
    constructor(name, price, imageUrl, description, category) {
        this.id = (Math.floor(Math.random() * 9999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.category = category;
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

    static updateProduct(id, name, price, imageUrl, description, category){
        const product = Product.getById(id);
        product.name = name;
        product.price = price;
        product.imageUrl = imageUrl;
        product.description = description;
        product.category = category;
        
    }

    static deleteProduct(id){
        products.splice(products.findIndex(product => product.id === id), 1);
    }

    static getProductsByCategory(categoryId){
        return products.filter(product => product.category === categoryId);
    }

};
