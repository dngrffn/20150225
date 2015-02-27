$(document).ready(
);
// hold areas for original image attributes
var item5_image_restore = $('#item5_image').attr('style');
var item6_image_restore = $('#item6_image').attr('style');
var button_name = "test"

$("#item1_button").click(
 //send alert when item1_button is clicked } 	
 function(){
  console.log($('#item1_button'));	  
  button_name = "item1_button" 	
  alert(button_name + " button clicked");	
  }
);
$("#item2_button").click (
  //hide item2_button when hovered over } 	
 function(e){
  button_name = "item2_button" 	
  $(e.currentTarget).hide();	
  }
);

$("#item3_button").click (
   //toggle all buttons when item3_button clicked, then restore item3_button } 	
 function(e){
  button_name = "item3_button" 	
  $(e.currentTarget).toggle();
  $('button').toggle();	
  }
);

$("#item4_button").click (
   //rotate names on buttons } 	
 function(e){
  button_name = ( $("#item4 h3").text()); 
  $("#item4 h3").text( $("#item3 h3").text());
  $("#item3 h3").text( $("#item2 h3").text()); 
  $("#item2 h3").text( $("#item1 h3").text()); 
  $("#item1 h3").text (button_name); 
  }
);
$("#item5_button").click (
   //anumate images }  
  function(){
    $("#item5_image").animate (  
            {  
                transform: 1440,  
                'width': '550px',  
                'height': '360px'  
            })
    $("#item6_image").animate (  
            {  
                'width': '50%',  
                'height': '50%'  
            })
   }
);
$("#item6_button").click (
   //restore image attributes to original values } 
    function(){
       // Reset from original
      $('#item5_image').attr('style','item5_image_restore');
      $('#item6_image').attr('style','item6_image_restore');
   }
);
$("#item5_image").hover (
  //swap images } 
  function(e){
  $("#item5_image").attr( {src:"images/image2.png"})
  $("#item6_image").attr( {src:"images/image1.png"})
 }
);
$("#item6_image").hover (
  //restore images } 
  function(e){
  $("#item5_image").attr( {src:"images/image1.png"})
  $("#item6_image").attr( {src:"images/image2.png"})
 }
);

