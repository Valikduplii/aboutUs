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
      var myPlayer = $("#myPlayer");
      $('#btnPlay').addClass("active");
      myPlayer.prop("controls", true); 
   })

})

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
               animItem.classList.add('_active');
            }else{
               if(!animItem.classList.contains('_anim-no-hide')){
                animItem.classList.remove('_active');
        }
            }
        }
    }
    function offset (el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
