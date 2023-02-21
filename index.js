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
    //
    //
    // TODO: FIX nomeclature i.e. "rexbanner-countdown.mp3" - remove spaces and unnecessary characters
    //
    //
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

// function arrowHighlight(){

//     $('#uparrow1').css('background-color', 'green');
// }
// function arrowNoHighlight(){
//     $('#uparrow1').css('background-color','');
// }
// setInterval(arrowHighlight,1000);
// setInterval(arrowNoHighlight,2000);


var arrowSets1 = document.getElementsByClassName('arrowSet1');
for (i=0; i < arrowSets1.length;i++)
{
    var randomArrowLight = arrowSets1[Math.floor(Math.random()*arrowSets1.length)];
    console.log (randomArrowLight);
    if($.inArray(randomArrowLight)
}
function arrowLightOn(){
randomArrowLight.style.backgroundColor = "green";

}
function arrowLightOff(){
    randomArrowLight.style.backgroundColor = "";
}

 setInterval(arrowLightOn, 1000);
 setInterval(arrowLightOff, 2000);