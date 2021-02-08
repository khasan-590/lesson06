"use strict";

function rundomNumber () {
	let randomNumber = Math.floor(Math.random () * 101);
	if (randomNumber == 0 ) {
		randomNumber = 1;
	}
	console.log (rundomNumber);

	function guessNumber () {
		let input = prompt("Введите число от 1 до 100");

		if (input < 0 || input > 100 ) {
			alert("Неверный диапозон");
			return guessNumber();
		} 
		if (isNaN(input) || input.trim() === '') {
			alert("Введите число!!");
			return guessNumber();
		} 
		else if (input > randomNumber) {
			alert("Загадонное число меньше");
			return guessNumber();
		} 
		else if (input < randomNumber) {
			alert("Загадонное число больше");
			return guessNumber();
		} 
		else if (input == randomNumber) {
			alert("Вы угадали!");
		} 
	}
	guessNumber();
}


rundomNumber();
