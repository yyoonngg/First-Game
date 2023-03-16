//랜덤 번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//  랜덤번호 < 유저번호 Down!
//  랜덤번호 > 유저번호 Up!
//Reset 버튼을 누르면 게임이 리셋된다
//  5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//  유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultText = document.getElementById("result-text");
let resetButton = document.getElementById("reset-button");
let chance = 5;
let chanceTime = document.getElementById("chances-time");
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value="";
})

function randomNum(){
    computerNum = Math.floor(Math.random() * 100 +1);
    console.log(computerNum);
}


function play(){
    if(userInput.value < 1 || userInput.value > 100){
        resultText.textContent = "1~100 범위 밖에 숫자를 입력했습니다!";
        return;
    }
    if(history.includes(userInput.value) == true){
        resultText.textContent = "이미 입력한 숫자입니다!";
        return;
    }
    chance--;
    console.log(chance);
    history.push(userInput.value);
    console.log(history);

    if(computerNum == userInput.value){
        resultText.textContent= "정답입니다~!";
        playButton.disabled = true;
    }else if(computerNum < userInput.value){
        resultText.textContent= "Down~!";
        chanceTime.textContent= `남은기회: ${chance}`;
    }else if(computerNum > userInput.value){
        resultText.textContent= "Up~!";
        chanceTime.textContent= `남은기회: ${chance}`;
    }
    if(chance == 0){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true;
        resultText.textContent="다음 기회에 ㅠㅠ";
    }
}

function reset(){
    randomNum();
    userInput.value = "";
    chance = 5;
    chanceTime.textContent= `남은기회: ${chance}`;
    resultText.textContent= "게임을 시작하세요!";
    gameOver = false;
    playButton.disabled = false;
    history = [];
}

randomNum();