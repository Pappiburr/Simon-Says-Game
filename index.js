// Reload Button// 
$('#Reload').on('click',function(){

    location.reload();
})


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
    $('#gamebar1').css('visibility','visible');
    

    var audioSV = new Audio("sounds/Yarin Primak - Special Vibe.mp3");
    audioSV.play();
});


// Arrow Highlight Function - changes background on arrow, for a few seconds, then switches it back off // 

function arrowHighlight(){

    $('#uparrow1').css('background-color', 'green');
}
function arrowNoHighlight(){
    $('#uparrow1').css('background-color','');
}

function arrowOnOff(){
    arrowHighlight();
    arrowNoHighlight();
}
setInterval(arrowHighlight,1000);
setInterval(arrowNoHighlight,2000);