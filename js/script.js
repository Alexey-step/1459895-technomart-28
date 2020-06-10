var modal = document.querySelector('.modal-feedback');
var button = document.querySelector('.location-contacts__feedback');
var closeButton = document.querySelector('.feedback-content__close');
var mapModal = document.querySelector('.map-modal');
var mapButton = document.querySelector('.location-contacts__map');
var closeMapButton = document.querySelector('.map-modal__close');
var cartModal = document.querySelector('.modal-cart');
var cartButton = document.querySelectorAll('.content-cart');
var closeCartButton = document.querySelector('.modal-cart__close');

if (button !== null) {
button.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-feedback--show');
});}

if (closeButton !== null) {
closeButton.addEventListener('click', function() {
    modal.classList.remove('modal-feedback--show');
});}

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


