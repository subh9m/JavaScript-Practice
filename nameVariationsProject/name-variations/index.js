import {getNumberOfChars, getFirstChar, getLastChar, getLowerCase, getUpperCase, getCapital}
from './variations.js'

const ans1 = document.querySelector("#answer1");
const ans2 = document.querySelector("#answer2");
const ans3 = document.querySelector("#answer3");
const ans4 = document.querySelector("#answer4");
const ans5 = document.querySelector("#answer5");
const ans6 = document.querySelector("#answer6");



const name = document.querySelector("#name");

name.addEventListener("keyup", () =>{
    const value = name.value;

ans1.textContent = getNumberOfChars(value);
ans2.textContent = getFirstChar(value);
ans3.textContent = getLastChar(value);
ans4.textContent = getLowerCase(value);
ans5.textContent = getUpperCase(value);
if(value){
    ans6.textContent = getCapital(value);
} else{
    ans6.textContent = "";
}


})

