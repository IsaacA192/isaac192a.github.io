$(document).ready(function()
{
  //alert('working');
   
  $('.menu').toggle(function()
  {
    $('.menu-canvas').fadeIn(250);
    $('.menu').removeClass('ia-hamburger-aligned');
    $('.menu').addClass('ia-cross-b');
    $('body').css({'overflow':'hidden'});
  },
  function()
  {
    $('.menu-canvas').fadeOut(250);
    $('.menu').addClass('ia-hamburger-aligned');
    $('.menu').removeClass('ia-cross-b');
    $('body').css({'overflow':'auto'});
  });
  
 ///////////////////////////////////////////   
    
  $('.cart').toggle(function()
  {
    $('#cart').slideDown(200);  
  },
  function()
  {
    $('#cart').slideUp(200);    
  });
    
  $('.event-info-section').toggle(function()
  {
    $(this).css({'height':'auto'}); 
  },
  function()
  {
    $(this).css({'height':'25px'}); 
  });
 
    
//////////////////////////////////////////////
    
  var tickets = 0;
    
  $('.minus').click(function()
  {
    tickets --;  
    $('.output').text(tickets);
    
    if(tickets == 0)
    {
      $('.minus').css({'pointer-events':'none'});
    }
  });
    
  $('.add').click(function()
  {
    tickets ++;  
    $('.output').text(tickets);
      if(tickets => 0)
      {
        $('.minus').css({'pointer-events':'all'});
      }
  });
    
  $('.output').text(tickets);
    if(tickets == 0)
    {
      $('.minus').css({'pointer-events':'none'});
    }
    
///////////////////////////////////////////////

   var tickets2 = 0;
    
  $('.minus2').click(function()
  {
    tickets2 --;  
    $('.output2').text(tickets2);
    
    if(tickets2 == 0)
    {
      $('.minus2').css({'pointer-events':'none'});
    }
  });
    
  $('.add2').click(function()
  {
    tickets2 ++;  
    $('.output2').text(tickets2);
      if(tickets2 => 0)
      {
        $('.minus2').css({'pointer-events':'all'});
      }
  });
    
  $('.output2').text(tickets2);
    if(tickets2 == 0)
    {
      $('.minus2').css({'pointer-events':'none'});
    }   

////////////////////////////////////////////////
    
    $('.num-bubble').toggle(function()
    {
      $(this).css(
      {
        'color':'var(--control-bg)',
        'border':'1px solid var(--control-bg)'
      });                            
    },
    function()
    {
      $(this).css(
      {
        'color':'var(--text)',
        'border':'1px solid var(--text)'
      });        
    });
///////////////////////////////////Hahaha/////////////
    
    $('.tick-box').toggle(function()
    {
      $('.check').fadeIn(100);  
    },
    function()
    {
      $('.check').fadeOut(100);   
    });
    
    $('.final').click(function()
    {
      $('.success').fadeIn(300); 
      $('.item-added').fadeOut(300);
      $('.check').fadeOut(100);  
        
      setInterval(function()
      {
        $('.success').fadeOut(300);   
      }, 3000);
    });
    
});






