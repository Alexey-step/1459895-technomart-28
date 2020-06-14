var modal = document.querySelector('.modal-feedback');
var button = document.querySelector('.location-contacts__feedback');
var closeButton = document.querySelector('.feedback-content__close');
var userName = document.querySelector('.modal-user_name');
var userEmail = document.querySelector('.modal-user_email');
var mainForm = document.querySelector('.main-form');
var mapModal = document.querySelector('.map-modal');
var mapButton = document.querySelector('.location-contacts__map');
var closeMapButton = document.querySelector('.map-modal__close');
var cartModal = document.querySelector('.modal-cart');
var cartButton = document.querySelectorAll('.content-cart');
var closeCartButton = document.querySelector('.modal-cart__close');

var btn = document.querySelectorAll('.slide-button');
var slide = document.querySelectorAll('.slider-item');

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
       
        var currentBtn = document.querySelector('.button-current');
        currentBtn.classList.remove('button-current');
        this.classList.add('button-current');
    
        var currentSlide = document.querySelector('.slider-current');
        currentSlide.classList.remove('slider-current');
        slide[i].classList.add('slider-current');
    }
};


var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

if (button !== null) {
button.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-feedback--show');

    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }

});}

if (closeButton !== null) {
closeButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-feedback--show');
    modal.classList.remove('modal-feedback--error');
});}

if (mainForm !== null) {
    mainForm.addEventListener('submit', function(evt) {
        if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        modal.classList.remove('modal-feedback--error');
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add('modal-feedback--error');
      } else {
        if (isStorageSupport) {
          localStorage.setItem('name', userName.value);
        }
      }
    })
};

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains('modal-feedback--show')) {
            evt.preventDefault();
            modal.classList.remove('modal-feedback--show');
            modal.classList.remove('modal-feedback--error');
        }
    }
});

if (mapButton !== null) {
mapButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('map-modal--show');
});}

if (closeMapButton) {
closeMapButton.addEventListener('click', function() {
    mapModal.classList.remove('map-modal--show');
});}

if (cartButton !== null) {
for (var i = 0; i < cartButton.length; i++)
cartButton[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    cartModal.classList.add('modal-cart--show');
});}

if (closeCartButton !== null) {
closeCartButton.addEventListener('click', function() {
    cartModal.classList.remove('modal-cart--show');
});}


