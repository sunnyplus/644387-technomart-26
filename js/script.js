var goonShopping = document.querySelectorAll(".action-buttons button"),
    cartButtons = document.querySelectorAll(".item-buttons button:first-of-type"),
    menu = document.querySelectorAll('[data-type=menu]'),
    service,
    cartModal = document.querySelector(".cart-modal");

document.querySelectorAll('.modal-close').forEach(function(elm){
    elm.addEventListener('click', function(){
        this.parentNode.classList.toggle('hidden');
    });
});
// добавляем товар в корзину
cartButtons.forEach(function(elm){
    elm.addEventListener('click',function(evt){
        evt.preventDefault();
        cartModal.classList.remove('hidden');
    });
})
// закрываем окно сообщения
goonShopping.forEach(function(elm){
    elm.addEventListener('click', function(evt){
        cartModal.classList.toggle('hidden');
    });
});