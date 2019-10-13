var mapPopup = document.querySelector(".map-popup"),
    serviceLink = document.querySelectorAll(".service-menu a"),
    writeUs = document.querySelector(".shop-contacts > a"),
    feedbackModal = document.querySelector(".feedback-modal");

document.querySelector(".map a").addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.toggle('hidden');
});
// открываем контактное окно "Заблудились..."
writeUs.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackModal.classList.remove('hidden');
    feedbackModal.querySelector('input[name=firstname]').focus();
});
// сервис меню
serviceLink.forEach(function(elm, i){
    elm.addEventListener('click', function(evt){
        evt.preventDefault();
        service = this.dataset.service;
        
        // деактивируем все пункты меню
        for(let j=0; j<serviceLink.length; j++) {
            if(serviceLink[j].classList.contains('current')){
                serviceLink[j].classList.remove('current');
            }
        }
        // прячем всю сервис-информацию
        menu.forEach(function(elm){
            if(!elm.classList.contains('hidden')){
                elm.classList.add('hidden');
            };
        });
        this.classList.add('current'); // активируем пункт меню
        // показываем нужную сервис-информацию
        
        menu.forEach(function(elm){
            // console.log(service);
            if(elm.classList.contains(service)){
                elm.classList.remove('hidden');
            }
        })
    });
});