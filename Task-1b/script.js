let items = document.getElementsByClassName("checkout-item");
items[0].setAttribute("open","");

let regButtons = document.getElementsByClassName("checkout-register__button");
let nextButtons = document.getElementsByClassName("checkout-item__button");

for(regButton of regButtons) {
    regButton.addEventListener("click",function (evt) { evt.preventDefault()} );
    // regButton.addEventListener("click",function () {console.log(regButton)} );
    regButton.addEventListener("click", function(){
        regButton.parentNode.parentNode.parentNode.removeAttribute("open");
        nextButtons[0].parentNode.parentNode.setAttribute("open","");
    })
}
for( let i =0; i<nextButtons.length; i++) {
    nextButtons[i].addEventListener("click",function (evt) { evt.preventDefault()} );
    nextButtons[i].addEventListener("click", function(){
        nextButtons[i].parentNode.parentNode.removeAttribute("open");
        nextButtons[i+1].parentNode.parentNode.setAttribute("open","");
    })
}