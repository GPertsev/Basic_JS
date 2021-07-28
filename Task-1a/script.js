let catalog = [];

let good = {
    id: undefined,
    imgSrc: undefined,
    price: undefined,
    name: undefined,
    rating: undefined,
    makeProductFromHTML: function (item) {
        let newProduct = {};
        newProduct.id = item.id;
        newProduct.imgSrc = `img/catalog/${item.id}.jpg`;
        newProduct.price = item.getElementsByClassName("popular-item-price")[0].innerText.replace("$", "");
        newProduct.name = item.getElementsByClassName("popular-item-description")[0].innerText;
        newProduct.rating = null;
        catalog.push(newProduct);
    }
}

let prodArr = document.getElementsByClassName("popular-item");
let cartList = document.getElementsByClassName("shopping-list")[0];

let cart = {
    productsInCart: [],
    productsQuantity: [],
    totalPrice: function () {
        let total = 0;
        for (let i = 0; i < this.productsInCart.length; i++) {
            let someId = this.productsInCart[i].id;
            let someQuan;
            for (let j = 0; j < this.productsQuantity.length; j++) {
                if (someId == this.productsQuantity[j].id) {
                    someQuan = this.productsQuantity[j].quantity;
                }
            }
            total += Number(this.productsInCart[i].price) * Number(someQuan);
        }
        return total;
    },

    checkQuantity: function (product) {
        let newProductQuantity = {};
        newProductQuantity.id = product.id;
        newProductQuantity.quantity = 1;
        cart.productsQuantity.push(newProductQuantity)
    },

    //Удаление товара из объекта корзины и разметки с пересчётом и изменением итоговой цены.

    deleteProductFromCart: function (productButton) {
        let cartList = document.getElementsByClassName("shopping-list")[0];
        let delItem = productButton.parentNode;
        delItem.remove();
        for (let i = 0; i < this.productsInCart.length; i++) {
            if (delItem.dataset.productId == this.productsInCart[i].id) {
                this.productsInCart.splice(i, 1);
            }
        }
        for (let i = 0; i < this.productsQuantity.length; i++) {
            if (delItem.dataset.productId == this.productsQuantity[i].id) {
                this.productsQuantity.splice(i, 1);
            }
        }
        let cartLisstTotal = document.getElementsByClassName("cart-total-price")[0];
        cartLisstTotal.innerText = cart.totalPrice();
        let cartSpan = document.getElementsByClassName("goods-in-cart")[0];
        cartSpan.dataset.before = cart.productsInCart.length;
        //Условие, когда нет обхектов в корзине снова появляется сообщение о пустой корзине.
        if (this.productsInCart.length == 0) {
            let emptyMessage = cartList.getElementsByClassName("empty-message")[0];
            if (!emptyMessage) {this.isEmpty();}
            
        }
    },
    //Добавляю через js новый элемент с сообщением о пустой корзине.
    isEmpty() {
        let emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-message"
        emptyMessage.innerText = "Shopping cart is Empty";
        cartList.appendChild(emptyMessage);
        emptyMessage.style.paddingTop = "20px";
        emptyMessage.style.fontSize = "16px";
        emptyMessage.style.fontWeight = "700";
        emptyMessage.style.color = "#222222";
    }
}



for (let prod of prodArr) {
    good.makeProductFromHTML(prod);
    prod.getElementsByClassName("overlay-button")[0].addEventListener("click", function (evt) { evt.preventDefault() });
    prod.getElementsByClassName("overlay-button")[0].addEventListener("click", function () { addProductFromCatalog(prod) })
}
window.onload = cart.isEmpty;

function addProductFromCatalog(product) {
    //Перед добавлением продукта в корзину ищу и удаляю сообщение если оно есть.
    let emptyMessage = cartList.getElementsByClassName("empty-message")[0];
    if (emptyMessage) { emptyMessage.remove(); }
    for (i = 0; i < catalog.length; i++) {
        if (product.id == catalog[i].id) {

            cart.productsInCart.push(catalog[i]);
            cart.checkQuantity(product);
            let cartItem = document.createElement("li");
            cartItem.className = `shopping-list-item shopping-list-item-${catalog[i].id}`;

            //Добавил дата аттрибут для хранения id продукта. Что бы не вытаскивать его из разметки.
            cartItem.dataset.productId = catalog[i].id;

            let cartItemLink = document.createElement("a");
            cartItemLink.href = "#";
            cartItemLink.className = "shopping-list-link";
            cartItem.appendChild(cartItemLink);

            let cartItemImg = document.createElement("img");
            cartItemImg.src = catalog[i].imgSrc;
            cartItemImg.className = "shopping-cart-item";
            cartItemLink.appendChild(cartItemImg);

            let cartItemInfo = document.createElement("div");
            cartItemInfo.className = "shopping-product-info";
            cartItem.appendChild(cartItemInfo);

            let cartItemName = document.createElement("p");
            cartItemName.className = "shopping-product-name";
            cartItemName.innerText = catalog[i].name;
            cartItemInfo.appendChild(cartItemName);

            let cartItemRating = document.createElement("div");
            cartItemRating.className = "shopping-product-rating";
            cartItemInfo.appendChild(cartItemRating);

            let cartItemPrice = document.createElement("p");
            cartItemPrice.className = "shopping-product-price";
            cartItemPrice.innerText = `1 x $${catalog[i].price}`;
            cartItemInfo.appendChild(cartItemPrice);

            let cartItemButton = document.createElement("button");
            cartItemButton.className = "shopping-cart-delete-button";
            let cartItemButtonIcon = document.createElement("i");
            cartItemButtonIcon.className = "icon-cancel";
            cartItemButton.appendChild(cartItemButtonIcon);
            cartItem.appendChild(cartItemButton);

            cartList.appendChild(cartItem);
        }
    }
    for (i = 0; i < cart.productsInCart.length; i++) {
        for (j = i + 1; j < cart.productsInCart.length; j++) {
            if (cart.productsInCart[i] == cart.productsInCart[j]) {
                cart.productsInCart.pop();
                cart.productsQuantity.pop();
                for (let prodQuant of cart.productsQuantity) {
                    if (prodQuant.id == cart.productsInCart[i].id) {
                        prodQuant.quantity++;
                        let existingCartItem = cartList.getElementsByClassName(`shopping-list-item-${cart.productsInCart[i].id}`)[0];
                        let existingCartItemPrice = existingCartItem.getElementsByClassName('shopping-product-price')[0];
                        existingCartItemPrice.innerText = `${prodQuant.quantity} x $${product.getElementsByClassName("popular-item-price")[0].innerText.replace("$", "")}`;
                        cartList.removeChild(cartList.lastChild);
                    }
                }
            }
        }

    }
    let cartLisstTotal = document.getElementsByClassName("cart-total-price")[0];
    cartLisstTotal.innerText = cart.totalPrice();
    let cartSpan = document.getElementsByClassName("goods-in-cart")[0];
    cartSpan.dataset.before = cart.productsInCart.length;

    //Пришлось каждый раз при создании элемента обновлять переменную с массивом элементов-кнопок для удаления и тут же добавлять им обработчик событий.
    let delButtons = document.getElementsByClassName("shopping-cart-delete-button");
    for (let button of delButtons) {
        button.addEventListener("click", function () { cart.deleteProductFromCart(button) })
    }
}


