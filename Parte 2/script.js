var likes1 = document.querySelector("#number1");
var sumar = 1;

document.querySelector("#number1").innerText = 9;

function aumentaLikes1() {
	likes1.innerText = parseInt(likes1.innerText) + sumar;
    console.log(likes1.innerText);
}

var likes2 = document.querySelector("#number2");

document.querySelector("#number2").innerText = 12;

function aumentaLikes2() {
	likes2.innerText = parseInt(likes2.innerText) + sumar;
    console.log(likes2.innerText);
}

var likes3 = document.querySelector("#number3");

document.querySelector("#number3").innerText = 9;

function aumentaLikes3() {
	likes3.innerText = parseInt(likes3.innerText) + sumar;
    console.log(likes3.innerText);
}