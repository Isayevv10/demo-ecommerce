
let gallery = document.querySelectorAll('.pic');
let heroImg = document.querySelector('.heroPic');

gallery.forEach( img => {
    img.addEventListener('click', e =>{
        gallery.forEach(img => {
            img.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
        heroImg.src = e.target.src.replace('-thumbnail','');
    });
})
// function thumbnail(e) {
//     gallery.forEach(img => {
//         img.classList.remove('active');
//     });
//     e.target.parentElement.classList.add('active');
//     heroImg.src = e.target.src.replace('-thumbnail','');
// }

let btnClose = document.querySelector('.icon-close');
let btnHamurger = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');
let mobileVersion = document.querySelector('.mobile-version');


btnHamurger.addEventListener('click',onbtnHamburgerClick);
btnClose.addEventListener('click',offbtnHamburgerClick);

function onbtnHamburgerClick() {
    menu.classList.remove('hidden');
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    mobileVersion.style.display = 'none';
}

function offbtnHamburgerClick() {
    menu.classList.add('hidden'); 
    myfunc(x);
}

let x = window.matchMedia("(max-width:479px)");
function myfunc() {
    if (x.matches) {
        mobileVersion.style.display = "block";
    } else {
        mobileVersion.style.display = "none";
    }
}
myfunc(x);
x.addListener(myfunc);


let btnBasket = document.querySelector(".btnBasket");
btnBasket.addEventListener('click', e=> {
    e.preventDefault();
    let cart = document.querySelector(".cart");
    cart.classList.toggle("hidden");
})


let btnAdd = document.querySelector('.item_2');
let cart = document.querySelector(".cart");
let cartProduct = document.querySelector('.cart-products');
let emptyMsg = document.querySelector('.msg-empty');

btnAdd.addEventListener('click', e => {
    emptyMsg.style.display = "none";
    cart.innerHTML += cartProduct.innerHTML + "<br/>";
})


cart.addEventListener('click', e => {  
    e.preventDefault();
    if (e.target.classList.contains('btnDelete')) {
        e.target.parentElement.style.display = "none";
      }
})



let productCounter = 1;
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnCountNumber = document.querySelector('.countNumber');

btnPlus.addEventListener('click', btnPlusCount);
btnMinus.addEventListener('click',btnMinusCount);

function btnPlusCount() {
    setProductCounter(1);
}
function btnMinusCount() {
    setProductCounter(-1);
}
function setProductCounter(value) {
    if ((productCounter + value) > 0) {
        productCounter += value;
        btnCountNumber.innerHTML = productCounter;
    }
}



let btnNext = document.querySelector('.next');
let btnPrevious = document.querySelector('.previous');
let heroPic2 = document.querySelector('.heroPic2');

btnNext.addEventListener('click',handleBtnClickNext);
btnPrevious.addEventListener('click',handleBtnClickPrevious);

function handleBtnClickNext() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 1;
    }
    setHeroImage(imageIndex);
}

function handleBtnClickPrevious() {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = 4;
    }
    setHeroImage(imageIndex);
}

function getCurrentImageIndex() {
    const imageIndex = parseInt(heroPic2.src.split('\\').pop().split('/').pop().replace('.jpg','').replace('image-product-',''));
    return imageIndex;
}

function setHeroImage(imageIndex) {
    heroPic2.src = `image-product-${imageIndex}.jpg`;

    gallery.forEach(img => {
        img.classList.remove('active');
    })
    gallery[imageIndex - 1].classList.add('active');
}




