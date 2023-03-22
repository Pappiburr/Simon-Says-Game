$('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
       window.scrollTo(0,0); 
  });


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
    default: console.log(arrowPress)
}
}
// button Animation// 

function buttonAnimation(key) {

let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    
setTimeout(function(){
        activeButton.classList.remove("pressed");
 } , 300);
}
var audioSV = new Audio("sounds/Yarin Primak - Special Vibe.mp3");
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
            audioSV.play();
            });
            function isPlaying(audioSV) { return !audioSV.paused; }

// $('#special-vibes').on('click', function(){
//     setTimeout(function(){$('#topArrowMove').animate({'top':'285',}, 2000 );},2300)
//     setTimeout(function(){$('#rightArrowMove').animate({'top':'285',}, 2000 );},2850)
//     setTimeout(function(){$('#downArrowMove').animate({'top':'285',}, 2000 );},3000)
//     setTimeout(function(){$('#leftArrowMove').animate({'top':'285',}, 2000 );},2650)
// })
function arrowAnimate(){
    setInterval(function(){$('#topArrowMove').animate({'top':'285',}, 2500 );},2300)
    setInterval(function(){$('#rightArrowMove').animate({'top':'285',}, 2500 );},2850)
    setInterval(function(){$('#downArrowMove').animate({'top':'285',}, 2500 );},3000)
    setInterval(function(){$('#leftArrowMove').animate({'top':'285',}, 2500 );},2650)
}

while (isPlaying(audioSV)===true){
        arrowAnimate();

}

// function arrowAnimate(){
//     setTimeout(function(){$('#topArrowMove').animate({'top':'285',}, 2000 );},2300)
//     setTimeout(function(){$('#rightArrowMove').animate({'top':'285',}, 2000 );},2850)
//     setTimeout(function(){$('#downArrowMove').animate({'top':'285',}, 2000 );},3000)
//     setTimeout(function(){$('#leftArrowMove').animate({'top':'285',}, 2000 );},2650)
// }
