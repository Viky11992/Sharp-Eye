var time = 10;
var score = 0;
var hitt = 0;
function makeBubble(params) {
    var clutter = "";
    for(var i =0; i<624; i++){
        var rn = Math.floor(Math.random()*10);
        clutter+=`<div id="bubble">${rn}</div>`;
        document.querySelector("#center").innerHTML=clutter;

    }
}
function newHit(params) {
    hitt = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=hitt;
}
function timer(params) {
    
   var count = setInterval(function (params) {
    if(time>0){
        time--;
        document.querySelector("#time").innerHTML=time;
    }
    else{
        clearInterval(count);
        document.querySelector("#time").innerHTML=time;
        document.querySelector("#center").innerHTML=`<h1 class="vvv">your highest score is ${score} </h1> <h3 class="sss">game over</h3>`;
        document.querySelector("#hit").innerHTML="";
        document.querySelector("#time").innerHTML="";
        document.querySelector("#score").innerHTML="";
        document.querySelector("#h1").innerHTML=""
        
    }
 
   },1000)
}
function inceseScore(params) {
    score+=1;
    document.querySelector("#score").innerHTML=score;
    if(score>10){
        time=8;
        document.querySelector("#h1").innerHTML= "level 2"

    }
    if(score>20){
        time=6;
        document.querySelector("#h1").innerHTML= "level 3"
    }

}
function match(params) {
    document.querySelector("#center").addEventListener("click", function (dets) {
        var clicked = Number(dets.target.textContent);
        if(clicked===hitt){
            
            time=10;
            inceseScore();
            makeBubble();
            newHit();
            
        }
       
    })
}

makeBubble();
newHit();
timer();
inceseScore();
match();