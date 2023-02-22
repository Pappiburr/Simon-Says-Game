// Reload Button// 
$('#Reload').on('click',function(){

    location.reload();
})


// Count Down Video //

$('#countdown').on('click', function(){
    let time3 = setTimeout(function(){$('#intro').html('3');},1000) 
    let time2 = setTimeout(function(){$('#intro').html('2');},2000) 
    let time1 = setTimeout(function(){$('#intro').html('1');},3000) 
    let timeGO = setTimeout(function(){$('#intro').html('GO!');},4000)
    let specialVidStart = setTimeout(function(){$('#countdown-vid').css('visibility', 'visible');},4500)
    let SpecialGamebarStart = setTimeout(function(){$('#gamebar2').css('visibility','visible');},4500)
  
   
   
    $('#countdown-vid').trigger('play');
    $('#countdown-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
   
    var audioCD = new Audio("sounds/Rex Banner - Countdown.mp3");
    audioCD.play();

});

            // Vibe Video and Audio// 
$('#special-vibes').on('click', function(){
    let time3 = setTimeout(function(){$('#intro').html('3');},1000) 
    let time2 = setTimeout(function(){$('#intro').html('2');},2000) 
    let time1 = setTimeout(function(){$('#intro').html('1');},3000) 
    let timeGO = setTimeout(function(){$('#intro').html('GO!');},4000)
    let specialVidStart = setTimeout(function(){$('#special-vid').css('visibility', 'visible');},4500)
    let SpecialGamebarStart = setTimeout(function(){$('#gamebar1').css('visibility','visible');},4500)

    // $('#special-vid').css('visibility', 'visible');
    $('#special-vid').trigger('play');
    $('#special-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
  
    

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

 
 
