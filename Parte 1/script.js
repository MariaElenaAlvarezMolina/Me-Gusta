var likes = document.querySelector("#number");
var sumar = 1;

document.querySelector("#number").innerText = 3;

function aumentaLikes() {
	likes.innerText = parseInt(likes.innerText) + sumar;
    console.log(likes.innerText);
}