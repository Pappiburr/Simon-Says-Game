$('#countdown').on('click', function(){

    $('#countdown-vid').trigger('play');
    $('#countdown-vid').attr("loop","loop");
    
    

    const audioCD = new Audio("sounds/Rex Banner - Countdown.mp3");
    audioCD.play();

});
$('#special-vibes').on('click', function(){
    alert("i've also been clicked");
});
