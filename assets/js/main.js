const tabsBtn = document.querySelectorAll(".tabs .tabs__btn");
const tabPanels = document.querySelectorAll(".tabs-panel");
 
tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });
        tabPanels.forEach(function(item){
            item.classList.remove('active');
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});



$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplayHoverPause:true,
    pagination : true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})