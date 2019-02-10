$(document).ready(function(){
  function makeGrid(){
// grid height value      
  var grid_height = $('#input_height').val();
// grid width value
  var grid_width = $('#input_width').val();
// get grid off dom  
  var grid = $('#pixel_canvas');
// clear grid off elements 
  grid.html('');
// make sure the valuse off input dose not crash browser 
if(grid_height >= 40){
  grid_height = 40;
}
if(grid_width >= 40){
  grid_width = 40;
}  
// make the grid with for and while loop in rubicon ?
var num = 0;
while(num < grid_height){
  // append table to the grid and then the last child element   
      grid.append('<tr></tr>');
      for(var i = 0; i < grid_width; i++){
        grid.children().last().append('<td></td>');
      }
  num++
  }

/* need the on click method event to get only the grid td amd then get the color */ 
grid.on('click', 'td', function(evt){
// get the input type color and put it in c_p     
    var c_p = $('input[type="color"]').val();
    
// uese this attribrute to add the background color to the td  
    $(this).attr('bgcolor',c_p);  
// use the event paramiter ctrl + click to delete color     
    if(evt.ctrlKey){
      $(this).attr('bgcolor', '#fbfdfe');
    }    
});

  }

/* click on the input use prevent default stop page relod and then make the grid*/
$('input[type="submit"]').click(function(evt){  
evt.preventDefault();
makeGrid();
displayName();
}); 
// input canvas name 

function displayName() {
  var ret_nam_val = $('input[type="text"]').val();
  // append it to header 3
  $('#header3').append(ret_nam_val);
  // toggle header 3 on
  $('#header3').toggle();
}

});