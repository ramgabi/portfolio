$(document).ready(function(){

var introSid = setTimeout(closeIntro,4000)

 const $document = $(document),
 $intro = $('.intro'),
 $header = $('.header'),
 $profile = $('.profile'),
 $portfolio = $('.portfolio'),
 $skill = $('.skill'),
 $text_line = $('.text_line'),
 $text_line2 = $('.text_line2');

 const pageBox = [$profile,$portfolio,$skill]
 var currentNum = 0;

 function closeIntro(){
  $intro.fadeOut('slow');

  $header.css('left','-400px').show().animate({
   left:0
  },1000)
  
  $profile.css('opacity','0').show().animate({
      opacity:1
    },2000)
}

/* header */

const $gnb = $('.gnb');

function changePage(num){
    pageBox[num].css('left','100vw').show().animate({
        left:0
    },2000);

    pageBox[currentNum].animate({
        left:'100vw'
    },2000,function(){
        $(this).hide()
    })

    currentNum = num
}

$gnb.find('a').each(function(){
    $(this).on('click',function(e){
        e.preventDefault();

        if(!$(this).hasClass('on')){
            var gnbNum = $(this).index();
            $gnb.find('a').removeClass('on');
            $(this).addClass('on');
    
            changePage(gnbNum);
        }
    })
})





/* portfolio */

const $portfolio_list = $('.portfolio_list'),
$portfolio_cont = $('.portfolio_cont')

var pageNum = 0,
porContLength = $portfolio_cont.length-1;

function animateList(num){
    var contWidth = $portfolio_cont.width();
    var moveList = contWidth * num;

    $portfolio_cont.removeClass('on ready')
    $portfolio_cont.eq(num).addClass('on')
    $portfolio_cont.eq(num+1).addClass('ready')
    
    $portfolio_list.animate({
        left:-moveList
    },1000,function(){
    })

}

function WheelDirection(delta){
    if(delta > 0){
      if(pageNum > 0){
        pageNum--;
       }
    }else{
      if(pageNum < porContLength){
          pageNum++;
      }
    }
    animateList(pageNum);
  }

$portfolio.on('mousewheel',function(e){
    var delta = e.originalEvent.wheelDelta;
    if(!$portfolio_list.is(':animated')){
    WheelDirection(delta);
    } 
})
})