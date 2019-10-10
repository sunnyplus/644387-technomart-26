let mapPopup = document.querySelector(".map-popup"),
    serviceLink = document.querySelectorAll(".service-menu a"),
    currentItem,
    menu = document.querySelectorAll('[data-type=menu]'),
    service;

document.querySelector('.modal-close').addEventListener('click', function(evt){
    // console.log(this.parentNode);
    this.parentNode.classList.toggle('visually-hidden');
})

document.querySelector(".map a").addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.toggle('visually-hidden');
});

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
        // показываем нужную скрвмс-информацию
        
        menu.forEach(function(elm){
            // console.log(service);
            if(elm.classList.contains(service)){
                elm.classList.remove('hidden');
            }
        })
        // console.log(this.dataset.service);
    });
});