const input = document.querySelector("#num");
const submit = document.querySelector('button');
const answer = randNum(1,100);
let count = 0;

function onSubmit(e){
    let input_num = document.querySelector("#num").value;
    input_num = parseInt(input_num);
    if (isNaN(input_num) || input_num>100 || input_num<1){
        document.querySelector('.result').innerText = "1~100 사이 정수를 입력하세요!";
    } else {
        count += 1;
        document.querySelector('.result').innerText = checker(input_num, answer);
        document.querySelector('.count').innerText = "시도횟수: " + count;
    }
}

function onKeyUp(e){
    if (e.keyCode == 13){
        onSubmit();
    }
}

function randNum(min, max){
    let randNum = Math.floor(Math.random()*(max-min+1))+min;
    return randNum;
}

function checker(expect, answer){
    if (expect<answer){
        return "Up!"
    } else if(expect>answer){
        return "Down!"
    } else{
        return "Congratuations! You're right!"
    }
}

submit.addEventListener('click', onSubmit);
input.addEventListener('keyup', onKeyUp);