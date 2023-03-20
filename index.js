// Reload Button// 
$('#Reload').on('click',function(){

    location.reload();
})


// Count Down Video //

$('#countdown').on('click', function(){
    let time3 = setTimeout(function(){$('#intro').html('3');},500) 
    let time2 = setTimeout(function(){$('#intro').html('2');},1000) 
    let time1 = setTimeout(function(){$('#intro').html('1');},1500) 
    let timeGO = setTimeout(function(){$('#intro').html('GO!');},2000)
    let specialVidStart = setTimeout(function(){$('#countdown-vid').css('visibility', 'visible');},2500)
    let SpecialGamebarStart = setTimeout(function(){$('#gamebar2').css('visibility','visible');},2500)
  
   
   
    $('#countdown-vid').trigger('play');
    $('#countdown-vid').attr("loop","loop");
    $('#countdown').attr('disabled', 'true');
    $('#special-vibes').attr('disabled', 'true');
   
    var audioCD = new Audio("sounds/Rex Banner - Countdown.mp3");
    audioCD.play();

});

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

function up1On(){$('#uparrow1').css("background-color", "green");}
function up1Off(){$('#uparrow1').css("background-color", "");}
function left1On(){$('#leftarrow1').css("background-color", "green");}
function left1Off(){$('#leftarrow1').css("background-color", "");}
function right1On(){$('#rightarrow1').css("background-color", "green");}
function right1Off(){$('#rightarrow1').css("background-color", "");}
function down1On(){$('#downarrow1').css("background-color", "green");}
function down1Off(){$('#downarrow1').css("background-color", "");}


var specVid = document.getElementById("special-vid");

while (audioSV.onplay){
$(document).addEventListener('keydown', (event) =>{});
    onkeydown = (event)=>{};
    console.log(KeyboardEvent);

}

specVid.onplay = function(){
setTimeout(up1On, 3000);
setTimeout(up1Off, 3500);
setTimeout(left1On, 4000);
setTimeout(left1Off, 4500);
setTimeout(left1On,5000);
setTimeout(left1Off,5500);
setTimeout(right1On,6000);
setTimeout(right1Off,6500);
setTimeout(down1On,7000);
setTimeout(down1Off,7500);
setTimeout(up1On,8000);
setTimeout(up1Off,8500);
setTimeout(left1On,9000);
setTimeout(left1Off,9500);
setTimeout(right1On,10000);
setTimeout(right1Off,10500);
setTimeout(up1On,11000);
setTimeout(up1Off,11500);
setTimeout(down1On,12000);
setTimeout(down1Off,12500);
setTimeout(down1On,13000);
setTimeout(down1Off,13500);
setTimeout(left1On,14000);
setTimeout(left1Off,14500);
setTimeout(left1On, 15000);
setTimeout(left1Off, 15500);
setTimeout(left1On,16000);
setTimeout(left1Off,16500);
setTimeout(right1On,17000);
setTimeout(right1Off,17500);
setTimeout(down1On,18000);
setTimeout(down1Off,18500);
setTimeout(up1On,19000);
setTimeout(up1Off,19500);
setTimeout(left1On,20000);
setTimeout(left1Off,20500);
setTimeout(right1On,21000);
setTimeout(right1Off,21500);
setTimeout(up1On,22000);
setTimeout(up1Off,22500);
setTimeout(down1On,23000);
setTimeout(down1Off,23500);
setTimeout(down1On,24000);
setTimeout(down1Off,24500);
setTimeout(left1On,25000);
setTimeout(left1Off,25500);
}
