
//Попытался сделать глобальный объект для продукта и метод, с помощью которого можно создать новый продукт.
let product = {
    price: 0,
    name: "",
    color: [],
    size: [],
    createProduct: function(price,name,colorArr,sizeArr){
        let product = {};
        product.price = price;
        product.name = name;
        product.color = colorArr;
        product.size = sizeArr;
        return product;
    },
}

//Уже существующие товары-объекты.
let product1 = {
    price:100, 
    name: "asd", 
    color: ["red", "black", "white"], 
    size: ["S","M","L"],
    
};

let product2 = {
    price:200, 
    name: "asd", 
    color: ["red", "black", "white"], 
    size: ["S","M","L"]
};

let product3 = {
    price:300, 
    name: "asd", 
    color: ["red", "black", "white"], 
    size: ["S","M","L"]
};


//Переписал корзну товаров с использованием объектов и метода считающего общую сумму товаров.
let cart = {
    productsInCart: [product1,product2,product3],
    totalPrice : function(){
        let total = 0;
        for(let prod of this.productsInCart){
            total+=prod.price;
        }
        return total;
    },
//Новый метод, добавляющий заранее созданный продукт в корзину.
    addInCart : function(product){
        this.productsInCart.push(product);
    }
}


product.createProduct(300,"dgdg",["blue","green"],["S", "XL", "XS"]);

//Создаю новый продукт используя метод. и вручную добавляю в корзину.
let product4 = product.createProduct(555,"fff", ["yellow", "grey"], ["XXS","XS"]);
cart.productsInCart.push(product4);


//Создаю новый продукт и добавляю его в корзину с помощью метода корзины.
let product5 = product.createProduct(666,"fff", ["pink", "orange"], ["S","XXL"]);
cart.addInCart(product5);


console.log(cart.productsInCart);
cart.totalPrice();

