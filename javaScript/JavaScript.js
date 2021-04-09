$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
   if ($('.news__slider').length > 0) {
      $('.news__slider').slick({
         easing: 'ease',
         autoplay: false,
         dots: true,
         slidesToShow: 2,
         autoplaySpeed: 10000,
         rows: 1,
         pauseOnFocus: true,
         pauseOnHover: true,
         slidesToScroll: 1,
         infinite: false,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 1000,
               settings: {
                  slidesToShow: 1,
               }
            },
         ],
      });
      // $(".news__more" || ".news__more.active").click(function () {
      //    $(this).parents(".news__item").find(".news__text").toggleClass("active");
      //    $(".news__more").toggleClass("active");
      // })
      // $(".small-img").click(function() {
      //    $(".big-img").attr("src", $(this).attr("src"));
      // });
   }
   if ($('.help__slider').length > 0) {
      $('.help__slider').slick({
         easing: 'ease',
         autoplay: false,
         dots: true,
         slidesToShow: 2,
         autoplaySpeed: 10000,
         rows: 1,
        
         pauseOnFocus: true,
         pauseOnHover: true,
         slidesToScroll: 1,
         infinite: false,
         adaptiveHeight: false,
         responsive: [
            {
               breakpoint: 775,
               settings: {
                  variableWidth: true,
                  slidesToShow: 1,
                  variableWidth: true,
                  centerMode: true,
                  infinite: true,
               }
            },
         ],
      });
   }
   if ($('.partners__slider').length > 0) {
      $('.partners__slider').slick({
         easing: 'ease',
         autoplay: true,
         dots: false,
         arrows: false,
         slidesToShow: 4,
         autoplaySpeed: 1000,
         rows: 1,
         centerMode: false,
         variableWidth: false,
         slidesToScroll: 1,
         infinite: true,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 1280,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 1000,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  centerMode: true,
               }
            },
         ],
      });
}
$("#content div").hide(); // Приховуємо зміст
$("#tabs li:first").attr("id","current"); // Активуємо першу закладку
$("#content div:first").fadeIn(); // Виводимо вміст
 
 $('#tabs a').click(function(e) {
     e.preventDefault();        
     $("#content div").hide(); //Приховати весь зміст
     $("#tabs li").attr("id",""); //Скидання ID
     $(this).parent().attr("id","current"); // Активуємо закладку
     $('#' + $(this).attr('title')).fadeIn(); // Виводимо вміст поточної закладки
 });

 function openCity(evt, cityName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " active";
 }

 const q = selector => document.querySelector(selector),
 on = 'addEventListener'
q('#btnPlay')[on]('click', ()=>myPlayer.play());

$('#btnPlay').click(function(event){ 
   $('#btnPlay').addClass("active");
})
})
