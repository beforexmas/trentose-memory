/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    var previours_number=0;
    for (var i=0;i<data.length;i++) {
        $('.cards').append("<li id='1' class='done'><h3>num</h3></li>  ".replace("num",data[i]));    
    }
    $('.opt-start').click(function() {
        $('li').each(function() {
            $('li').removeClass('done');
            $('li').addClass('hidden');                 
        });
    });
    $('li').click(function() {
        $(this).removeClass('hidden');
        $(this).addClass('done');
        if ($(this).text()==previours_number+1) {
            
        }
        else {
            alert('You lose');   
        }
        if ($(this).text()==data.length) {
            alert('You won');    
        }
        previours_number++;
    });
});







