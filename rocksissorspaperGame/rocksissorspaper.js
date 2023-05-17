const $rock = document.getElementById("rock");
const $sissors = document.getElementById("sissors");
const $paper = document.getElementById("paper");
const $computer = document.getElementById("computer");

//0 바위, 1 가위, 2 보
$rock.addEventListener("click", function(){
    const random = Math.floor(Math.random()*3);
    $computer.innerText = random;
    if(random === 0){
        alert("비겼습니다");
    }   
    else if(random === 1){
        alert("이겼습니다!");
    }
    else if(random === 2){
        alert("졌습니다");
    }
    
});

$sissors.addEventListener("click", function(){
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        alert("졌습니다");
    }   
    else if(random === 1){
        alert("비겼습니다");
    }
    else if(random === 2){
        alert("이겼습니다!");
    }
});

$paper.addEventListener("click", function(){
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        alert("이겼습니다!");
    }   
    else if(random === 1){
        alert("졌습니다");
    }
    else if(random === 2){
        alert("비겼습니다");
    }
});