let gameSeq = [];
let userSeq = [];

let btns = ["blue","chartreuse","hotpink","darkorange"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("click", function() {
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // Choose random botton the flash
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}
function checkAns(idx) {
    // console.log("curent level : ",level);
    
    if(userSeq[idx] === gameSeq[idx]){
        console.log("Correct button");
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp , 500);
        }
    }else {
        h2.innerHTML = `Game Over! your score was <b>  ${level}. </b><br>Press any key to restart.`;
        document.querySelector("body").style.color = "red";
        // console.log("game end!!")
        setTimeout(function() {
            document.querySelector("body").style.color = "white";
            reset();
        },212);        
    }
}

function btnPress() {
    let btn = this; 
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0

}