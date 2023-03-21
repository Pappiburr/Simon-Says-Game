// Reload Button// 
$('#Reload').on('click',function(){

    location.reload();
})
//  keypress event listener // 
document.addEventListener("keydown", function(event){
    
    buttonAnimation(event.key);
})
function arrowPress(key){
switch (key){
    case "Down":
    case "ArrowDown":
        break;
    case "up":
    case "ArrowUp":
        break;
    case "Left":
    case "ArrowLeft":
        break;
    case "Right":
    case "ArrowRight":
        break;
    default: console.log(buttonInnerHTML)
}
}
function buttonAnimation(key) {

let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    
setTimeout(function(){
        activeButton.classlist.remove("pressed");
 } , 300);
}


            // Vibe Video and Audio// 
$('#special-vibes').on('click', function(){
    let time3 = setTimeout(function(){$('#intro').html('3');},500) 
    let time2 = setTimeout(function(){$('#intro').html('2');},1000) 
    let time1 = setTimeout(function(){$('#intro').html('1');},1500) 
    let timeGO = setTimeout(function(){$('#intro').html('GO!');},2000)
    let specialVidStart = setTimeout(function(){$('#special-vid').css('visibility', 'visible');},2500)
    let SpecialGamebarStart = setTimeout(function(){$('#gamebar1').css('visibility','visible');},2500)


    $('#special-vid').trigger('play');
    $('#special-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
  
    

    var audioSV = new Audio("sounds/Yarin Primak - Special Vibe.mp3");
    audioSV.play();
});
