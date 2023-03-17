//todo : (Start Code JavaScript (ES6)) 
const display = document.querySelector(".display");
const listClick = document.querySelectorAll(".contrl");
const calculator = document.querySelector(".calculator");
const C = document.querySelector(".C");
const AC = document.querySelector(".AC");
const contrlTheme = document.querySelector(".contrlTheme");
const keypad = document.querySelector(".keypad");
const root = document.querySelectorAll(".root");

listClick.forEach((item) => {
    item.addEventListener("click" , disPlayShow);
});

function disPlayShow(event){
    const xNum = event.target.innerText;
    if (display.innerHTML == 0){
        display.innerHTML = xNum;
    } else {
        display.innerHTML += xNum;
    } 
}

calculator.addEventListener("click" , calculatorResult);
function calculatorResult(){
    display.innerHTML = eval(display.innerHTML);
}

AC.addEventListener("click" , clearAll);
function clearAll(){
    display.innerHTML = 0;
}

C.addEventListener("click" , clearTask);
function clearTask(){
    const text = display.innerHTML;
    if(display.innerHTML.length == 1){
        display.innerHTML = 0;
    } else{
        display.innerHTML = text.substring(0 , text.length - 1);
    }
}

contrlTheme.addEventListener("click" , themeDark);
function themeDark(){
    keypad.style.background = "#121212";
    root.forEach((item) => {
        item.style.background = "orangered";
        item.style.color = "snow";
    }); 
}