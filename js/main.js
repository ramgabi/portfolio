$(document).ready(function(){

var introSid = setTimeout(closeIntro,4000)

 const $document = $(document),
 $intro = $('.intro'),
 $header = $('.header'),
 $profile = $('.profile'),
 $portfolio = $('.portfolio'),
 $skill = $('.skill'),
 $section = $('section'),
 $text_line = $('.text_line'),
 $text_line2 = $('.text_line2'),
 $portfolio_list = $('.portfolio_list'),
 $portfolio_cont = $('.portfolio_cont');

 const pageBox = [$profile,$portfolio,$skill]
 var currentNum = 0;

 function closeIntro(){
  $intro.fadeOut('slow');

  if(isWeb){
      $header.css('left','-400px').show().animate({
       left:0
      },1000)
      
      $profile.css('opacity','0').show().animate({
          opacity:1
        },2000)
    }else{
        $header.css('top',-$header.height()).show().animate({
         top:0
        },1000)
        
        $profile.css('opacity','0').show().animate({
            opacity:1
          },2000)
  }

}

/* checkAgent */

var agent = navigator.userAgent.toLowerCase();

if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
    $('.warning').show();
}


/* checkWeb */
var isWeb = false;
var thisWidth = $document.width();

checkWeb();

$(window).on('resize',function(){
    clearInterval(resizing)
    var resizing = setTimeout(checkWeb,500)
})

function checkWeb(){
    thisWidth = $document.width();
    
    if(thisWidth >= 1280){
        isWeb = true;
        animateList(0);
        pageNum = 0;
    }else{
        isWeb = false;
        $portfolio_list.css('left','0');
    }
}


/* header */

const $gnb = $('.gnb');

function changePage(num){

    if(isWeb){
        pageBox[num].css('left',thisWidth).show().stop().animate({
            left:0
        },2000);
    
        pageBox[currentNum].stop().animate({
            left:thisWidth
        },2000,function(){
            $(this).hide()
        })
    }else{
        pageBox[num].fadeIn(1000)
        pageBox[currentNum].fadeOut(500)
    }

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
    if(!$portfolio_list.is(':animated') && isWeb){
    WheelDirection(delta);
    } 
})


})