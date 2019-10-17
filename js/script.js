var goonShopping = document.querySelectorAll(".action-buttons button[type=button]"),
    cartButtons = document.querySelectorAll(".item-buttons button:first-of-type"),
    menu = document.querySelectorAll('[data-type=menu]'),
    service,
    cartModal = document.querySelector(".cart-modal"),
    modalClose = document.querySelectorAll('.modal-close'),
    mapModal = document.querySelector(".map-modal"),
    serviceLink = document.querySelectorAll(".service-menu a"),
    writeUs = document.querySelector(".shop-map > a"),
    feedbackModal = document.querySelector(".feedback-modal"),
    sliderParagraph = document.querySelectorAll(".forth .slide"),
    sliderButtons = document.querySelectorAll(".forth .slider-button"),
    sliderIndicator = document.querySelectorAll('.slider-indicator');
    if(localStorage.getItem('firstname')){
        var firstNameStorage = localStorage.getItem('firstname');
    }
    if(localStorage.getItem('email')){
      var emailStorage = localStorage.getItem('email');
    }    

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

if(document.querySelector(".map a")){
    document.querySelector(".map a").addEventListener("click", function(evt){
        evt.preventDefault();
        mapModal.classList.toggle('hidden');
    });
}

// открываем контактное окно "Заблудились..."
if(writeUs){
    writeUs.addEventListener("click", function(evt){
        evt.preventDefault();
        feedbackModal.classList.remove('hidden');
        feedbackModal.classList.add('modal-appearance');
        setTimeout(function(){
            feedbackModal.classList.remove('modal-appearance');
        },1000);
        var firstName = feedbackModal.querySelector('input[name=firstname]');
        var email = feedbackModal.querySelector('input[name=email]');
        setTimeout(function(){
            if(emailStorage){
                email.value = emailStorage;
            }
            else{
                email.focus();
            }
        });
        setTimeout(function(){
            if(firstNameStorage){
                firstName.value = firstNameStorage;
            }
            else{
                firstName.focus();
            }
        });
        if(!document.querySelector('#user-message').value){
            document.querySelector('#user-message').focus();
        }
        // localstorage
        firstName.addEventListener('keyup',function(){
            localStorage.setItem('firstname',firstName.value);
        });
        email.addEventListener('keyup',function(){
            localStorage.setItem('email',email.value);
        });
        // клик на отправить
        document.querySelector('.action-buttons button[type=submit]').addEventListener('click',function(evt){
            evt.preventDefault();
            if(!document.querySelector('input[name=firstname]').value || !document.querySelector('input[name=email]').value || !document.querySelector('#user-message').value) {
                feedbackModal.classList.add('modal-shake');
                setTimeout(function(){
                    feedbackModal.classList.remove('modal-shake');
                },1000);
            }
            else{
                feedbackModal.classList.add('hidden');
            }
        });
    });
}

// сервис меню
for(var i=0;i<serviceLink.length;i++){
    serviceLink[i].addEventListener('click', function(evt){
        evt.preventDefault();
        service = this.dataset.service;
        
        // деактивируем все пункты меню
        for(var j=0; j<serviceLink.length; j++) {
            if(serviceLink[j].classList.contains('current')){
                serviceLink[j].classList.remove('current');
            }
        }
        // прячем всю сервис-информацию
        for(var k=0;k<menu.length;k++){
            if(!menu[k].classList.contains('hidden')){
                menu[k].classList.add('hidden');
            }
        }
        this.classList.add('current'); // активируем пункт меню
        // показываем нужную сервис-информацию
        
        for(var l=0;l<menu.length;l++){
            // console.log(service);
            if(menu[l].classList.contains(service)){
                menu[l].classList.remove('hidden');
            }
        }
    });
}
// меняем текст у слайдов
for(var i=0;i<sliderButtons.length;i++){
    sliderButtons[i].addEventListener('click', function(evt){
        evt.preventDefault();
        this.parentNode.classList.toggle('change-slide');
        for(var j=0;j<sliderParagraph.length;j++){
            sliderParagraph[j].classList.toggle('hidden');
        }
        for(var k=0;k<sliderIndicator.length;k++){
            sliderIndicator[k].classList.toggle('checked');
        }
    });
}