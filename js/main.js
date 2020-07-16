$(document).ready(function(){

//var introSid = setTimeout(closeIntro,5000)

 const $document = $(document),
 $intro = $('.intro'),
 $header = $('.header'),
 $profile = $('.profile'),
 $portfolio = $('.portfolio'),
 $skill = $('.skill');

 function closeIntro(){
  $intro.fadeOut('slow');

  $header.css('left','-400px').show().animate({
   left:0
  },1000)

  $profile.css('opacity','0').show().animate({
   opacity:1
  },2000)
 }


/* portfolio img */
/* 
const $portfolio_cont_on = $('.portfolio_cont.on'),
$cont_img = $portfolio_cont_on.find('.cont_img');

console.log($cont_img)

var moveMax = 100,
rotateMax = 200,
docX,docY,moveX,moveY,rotateX,rotateY;

$document.mousemove(function(e){
 docX = $document.width();
 docY = $document.height();

 moveX = (e.pageX - docX/2) / (docX/2) * -moveMax;
 moveY = (e.pageY - docY/2) / (docY/2) * -moveMax;
 
 rotateX = (e.pageX / docX * rotateMax * 2) / (docX/2) * -rotateMax;
 rotateY = (e.pageX / docY * rotateMax * 2) / (docX/2) * -rotateMax;
 
 moveImg();
 
})

function moveImg(){
 $cont_img.css({
  left:moveX+'px',
  top:moveY+'px',
  transform:'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'
 })
} */

})




