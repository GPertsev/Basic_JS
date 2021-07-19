let cart = [];

let countBasketPrice = function (pricesArr) {
    let total = 0;
    for(let i = 0; i<pricesArr.length; i++) {
        total+=pricesArr[i]
    }
    return total;
}

let randomGoodsPrices = [100, 200, 300, 400, 500];
countBasketPrice(randomGoodsPrices);