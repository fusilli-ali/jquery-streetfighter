$(document).ready(function(){
    setInterval(function() {
    $('#slide1').hide();
    }, 5550);
});
    var first="still";
    $('.ryu').mouseenter(function(){
        first="ready";
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        first="still";
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $('body').keydown(function(e){
        if(e.which==88){
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
        }
    });
    $('body').keyup(function(){
        if(first=="still"){
            $('.ryu-still').show();
        } else {
           $('.ryu-ready').show();
        }
        $('.ryu-cool').hide();  
    });

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

