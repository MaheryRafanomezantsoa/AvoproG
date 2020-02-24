jQuery(document).ready(function(){
"use strict";
$("#slider-carousel").caroufredsel({
    responsive:true,
    width:'100%',
    circular: true,
    scroll:{
        items:1,
        duration:500,
        pauseOnHover:true
    },
    auto: true,
    items:
    {
        visible:{
            min:1,
            max:1
        },
        height:"variable"
    },
    pagination:{
        container:".sliderpager",
        pageAnchorBuilder:false
    }
})
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
        $("Navbar").addClass('secondary');
    }
    else if($("Navbar").hasClass('secondary')) {
        $("Navbar").removeClass('secondary')
    }
})
});
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);