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
                setTimeout(function(){$('#intro').html('3');},500) 
                setTimeout(function(){$('#intro').html('2');},1000) 
                setTimeout(function(){$('#intro').html('1');},1500) 
                setTimeout(function(){$('#intro').html('GO!');},2000)
                setTimeout(function(){$('#special-vid').css('visibility', 'visible');},2500)
                setTimeout(function(){$('#gamebar1').css('visibility','visible');},2500)
            
            
                $('#special-vid').trigger('play');
                $('#special-vid').attr("loop","loop");
                $('#countdown').attr('disabled', 'true');
                $('#special-vibes').attr('disabled', 'true');
                    audioSV.play();
                         function isPlaying(audioSV) { return !audioSV.paused; }
                    loopityLoop();


                //     while (isPlaying(audioSV)===true){
                //         loopityLoop();
                
                // }
            });
            function isPlaying(audioSV) { return !audioSV.paused; }

function arrowAnimate1(){
    $('#topArrowMove').animate({'top':'285',}, 2400 );
    $('#rightArrowMove').animate({'top':'285',}, 2000 );
    $('#downArrowMove').animate({'top':'285',}, 2600 );
    $('#leftArrowMove').animate({'top':'285',}, 1900 );
}
function arrowAnimate2(){
    $('#topArrowMove').animate({'top':'285',}, 1600 );
    $('#rightArrowMove').animate({'top':'285',}, 2400 );
    $('#downArrowMove').animate({'top':'285',}, 2700 );
    $('#leftArrowMove').animate({'top':'285',}, 2000 );
}
function arrowAnimate3(){
    $('#topArrowMove').animate({'top':'285',}, 1950 );
    $('#rightArrowMove').animate({'top':'285',}, 2200 );
    $('#downArrowMove').animate({'top':'285',}, 2800 );
    $('#leftArrowMove').animate({'top':'285',}, 1500 );
}
function arrowClear(){
    $('#topArrowMove').css('top', '1250px');
    $('#rightArrowMove').css('top', '1250px');
    $('#downArrowMove').css('top', '1250px');
    $('#leftArrowMove').css('top', '1250px');
}

// Main Gameplay Loop 
function loopityLoop(){
    setTimeout(arrowAnimate2, 3000)
    setTimeout(arrowClear, 6100)
    setTimeout(arrowAnimate3, 6150)
    setTimeout(arrowClear, 9200)
    setTimeout(arrowAnimate1,9350 )
    setTimeout(arrowClear, 12350)
    setTimeout(arrowAnimate3, 12400)
    setTimeout(arrowClear, 15300)
    setTimeout(arrowAnimate2, 15350)
    setTimeout(arrowClear, 18500)
    setTimeout(arrowAnimate1, 18550)
    setTimeout(arrowClear, 21550)
    setTimeout(arrowAnimate2,21600 )
    setTimeout(arrowClear, 24650)
    setTimeout(arrowAnimate3, 24700)
    setTimeout(arrowClear, 27750)

    
}   
const catchphrases = ['Nice', 'Good Job!' , 'Atta-Boy!', 'Nice going champ!'];


function booYah(){
    randoPhrase = catchphrases[Math.floor(Math.random(catchphrases)*4)] 

    return randoPhrase;


}


