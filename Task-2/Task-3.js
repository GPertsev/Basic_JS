let smallPicArr = document.getElementsByClassName('product-pic');
let overlay = document.getElementsByClassName("overlay")[0];
let modal = document.getElementsByClassName("modal")[0];
let buttons = document.getElementsByClassName("button");
let bigPic = document.getElementsByClassName("product-pic-big")[0];
for (let sPic of smallPicArr) {
    sPic.addEventListener("click", function () { showModal(sPic) })
}

for (let but of buttons) {
    but.addEventListener("click", function () { changePic(but) })
}

overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", changePicKey);

function showModal(pic) {
    modal.classList.remove("hidden");
    let smallSrc = pic.src.split("img/")[1];
    bigPic.src = `img/big${smallSrc}`;
    let right = document.getElementsByClassName("right")[0];
    let left = document.getElementsByClassName("left")[0];
    right.style.color = "black";
    left.style.color = "black";
    let currentPic = bigPic.src.split("_")[1].split(".")[0];
    if (currentPic == 1) {
        left.style.color = "red";
    } else {
        left.style.color = "black";
    }
    if (currentPic == smallPicArr.length) {
        right.style.color = "red";
    } else {
        right.style.color = "black";
    }
}

function closeModal() {
    modal.classList.add("hidden");
}

function changePic(but) {
    let right = document.getElementsByClassName("right")[0];
    let left = document.getElementsByClassName("left")[0];
    let currentPic = bigPic.src.split("_")[1].split(".")[0];
    if (but.classList.contains("left") && currentPic > 1) {
        --currentPic
    } else if (but.classList.contains("right") && currentPic < smallPicArr.length) {
        ++currentPic
    }
    if (currentPic == 1) {
        left.style.color = "red";
    } else {
        left.style.color = "black";
    }
    if (currentPic == smallPicArr.length) {
        right.style.color = "red";
    } else {
        right.style.color = "black";
    }
    bigPic.src = `img/bigpic_${currentPic}.jpg`
}

function changePicKey(evt) {
    let currentPic = bigPic.src.split("_")[1].split(".")[0];
    let right = document.getElementsByClassName("right")[0];
    let left = document.getElementsByClassName("left")[0];
    if (evt.keyCode==37 && currentPic > 1) {
        --currentPic
    } else if (evt.keyCode==39 && currentPic < smallPicArr.length) {
        ++currentPic
    }
    if (currentPic == 1) {
        left.style.color = "red";
    } else {
        left.style.color = "black";
    }
    if (currentPic == smallPicArr.length) {
        right.style.color = "red";
    } else {
        right.style.color = "black";
    }
    bigPic.src = `img/bigpic_${currentPic}.jpg`
}


