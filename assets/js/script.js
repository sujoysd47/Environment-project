  /*-- Menu Sticky --*/
  var windows = $(window);
  var sticky = $('.header-sticky')
  windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });


  $(".menu-toggle-btn").click(function(){
    $(".main-menu").toggleClass("open-menu");
  });



  /*--nav toggler --*/
  function myFunction(x) {
    x.classList.toggle("change");
  }

  /*--search box --*/

  $('.open-search-box').click(function(){
  $('.search-box').toggleClass("search-box-show");

  });




  /*-- counter --*/
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  /*-- Mixitup --*/
  var mixer= mixitup(".mix-container");
      
  
  var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
   loop: true,
   speed:1500,
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
      },
    });