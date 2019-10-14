var goonShopping = document.querySelectorAll(".action-buttons button[type=button]"),
    cartButtons = document.querySelectorAll(".item-buttons button:first-of-type"),
    menu = document.querySelectorAll('[data-type=menu]'),
    service,
    cartModal = document.querySelector(".cart-modal"),
    modalClose = document.querySelectorAll('.modal-close');

for(var i=0;i<modalClose.length;i++){
       modalClose[i].addEventListener('click', function(){
        this.parentNode.classList.toggle('hidden');
    }); 
}

// добавляем товар в корзину
for(var i=0;i<cartButtons.length;i++){
    cartButtons[i].addEventListener('click',function(evt){
        evt.preventDefault();
        cartModal.classList.remove('hidden');
    });
}
// закрываем окно сообщения
for(var i=0;i<goonShopping.length;i++){
    goonShopping[i].addEventListener('click', function(evt){
        cartModal.classList.toggle('hidden');
    });
}