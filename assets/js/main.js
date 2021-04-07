const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");
 
for(let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();
     
    document.querySelector('.tabs li.active').classList.remove("active");
    document.querySelector('.tabs-panel.active').classList.remove("active");
 
    const parentListItem = el.parentElement;
    parentList.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
     
    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}

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