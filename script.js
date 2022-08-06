window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#icon').addEventListener('click', function(){
        document.querySelector('#left-menu').classList.toggle('open')
    })
})
window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#icon').addEventListener('click', function(){
        document.querySelector('#sticky-icon').classList.toggle('open')
    })
})
window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#left-Link').addEventListener('click', function(){
        document.querySelector('#left-Link').classList.add('left-link')
    })
})
window.addEventListener('DOMContentLoaded',function(){
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})