// Reload Button// 
$('#Reload').on('click',function(){

    location.reload();
})


// Count Down Video //

$('#countdown').on('click', function(){
    let time3 = setInterval(function(){$('#intro').html('3');},1000) 
    let time2 = setInterval(function(){$('#intro').html('2');},2000) 
    let time1 = setInterval(function(){$('#intro').html('1');},3000) 
  
   
    $('#countdown-vid').css('visibility', 'visible');
    $('#countdown-vid').trigger('play');
    $('#countdown-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
    $('#gamebar2').css('visibility','visible');
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
let arrowSets1 = document.getElementsByClassName('arrowSet1');
for ( var i=0; i < arrowSets1.length; i++)
{
    
    var randomArrowLight = arrowSets1[Math.floor(Math.random()*arrowSets1.length)];
    console.log(randomArrowLight);
    

}
setInterval(arrowLightOn, 900);
function arrowLightOn(){
randomArrowLight.style.backgroundColor = "green";

}
setInterval(arrowLightOff, 1000);
function arrowLightOff(){
    randomArrowLight.style.backgroundColor = "";
}

 
 
