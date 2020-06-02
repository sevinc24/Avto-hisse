 
//  loader
const loader = document.getElementsByClassName('loader')[0];
window.onload=function(){
    loader.classList.add('del');

    this.setTimeout(function(){
        loader.remove()
    }, 4000);
}
// -----scroll top------
$(function(){
    var offset = 250;
    var duration = 300;

    $(window).scroll(function(){
      if($(this).scrollTop() > offset){
        $('#toTop').fadeIn(duration);
      }
      else{
        $("#toTop").fadeOut(duration);
      }
    });
    $("#toTop").clcik(function(){
      $("body,html").animate({scrollTop: 0},duration)
    })
})
// const header = document.querySelector('header');

// window.addEventListener('scroll', function() {
//   const offset = window.pageYOffset;
  
//   if(offset > 75)
//     nav.classList.add('inscroll')
//   else 
//     nav.classList.remove('onscroll')
// });

// hover icon in the header
$(function(){
    $(".right_icon").click(function(){
      $(".none").toggle();
    })
})

// hover menu list
$(function(){
    $(".relative_menu").hover(function(){
      $('.absolute_menu').toggle();
    })
})
$(function(){
    $(".others-relative").hover(function(){
      $('.others-absolute').toggle();
    })
})
$(function(){
    $(".magazine-relative").hover(function(){
      $('.magazine-absolute').toggle();
    })
})
$(function(){
    $(".avto-cotolog").hover(function(){
      $('.hover-window').toggle();
    })
})