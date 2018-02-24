$(document).ready(function()
{
  //alert("the thing is working");
  $('.menu-trigger').toggle(function()
  {
     $('.menu-items').fadeIn(200);
     $('.menu-trigger').removeClass('ia-menu-stack-b');
     $('.menu-trigger').addClass('ia-cross-b');
  },function()
  {
     $('.menu-items').fadeOut(200);
     $('.menu-trigger').removeClass('ia-cross-b');
     $('.menu-trigger').addClass('ia-menu-stack-b');      
  });
  

    
  var x = 0; 
  $('.t-output').text(x);
 
  $('.a-plus').click(function()
  {
    x += 1;      
    $('.t-output').text(x);
  });
  $('.a-minus').click(function()
  {
    x -= 1;      
    $('.t-output').text(x);
  }); 
    
  $('.t-output2').text(x);
 
  $('.s-plus').click(function()
  {
    x += 1;      
    $('.t-output2').text(x);
  });
  $('.s-minus').click(function()
  {
    x -= 1;      
    $('.t-output2').text(x);
  }); 
    
  $('.seat-bubble').toggle(function()
  {
     $(this).css(
         {
             'border':'2px solid var(--blue)',
             'color':'var(--blue)'
         }); 
  },
  function()
  {
     $(this).css(
         {
             'border':'2px solid var(--text)',
             'color':'var(--text)'
         });       
  });
    
});