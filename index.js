// Count Down Video //

$('#countdown').on('click', function(){

    $('#countdown-vid').css('visibility', 'visible');
    $('#countdown-vid').trigger('play');
    $('#countdown-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
    $('#special-vid').css('z-index', '-1');
    var audioCD = new Audio("sounds/Rex Banner - Countdown.mp3");
    audioCD.play();

});

            // Vibe Video and Audio// 
$('#special-vibes').on('click', function(){

    $('#special-vid').css('visibility', 'visible');
    $('#special-vid').trigger('play');
    $('#special-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
    

    var audioSV = new Audio("sounds/Yarin Primak - Special Vibe.mp3");
    audioSV.play();
});
