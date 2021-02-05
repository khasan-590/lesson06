"use strict";

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}


function getRandomInner(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game (regtNumber) {

    if (regtNumber < 0 || regtNumber > 100 || !regtNumber){
      regtNumber = getRandomInner(0, 100);
    }
    console.log(regtNumber);
    let messagess = ''; //дополнительное сообщение о величине числа(больше - меньше)
    const getNumber = function (message) {
        if(!message){
            message = 'Угадай число от 1 до 100';
        }
        let userNumber = getNumberUsers (messagess  +  `\n` +  message);
        if(userNumber === null){    //если нажата Отмена
            alert("Игра окончена");
            return 0;
        } else if(userNumber === regtNumber) {  //если число угадано
            alert("Поздравляю, Вы угадали");
            return 0;
        } else if (userNumber > regtNumber) {
            messagess =  "Загаданное число меньше";
        } else if (userNumber < regtNumber) {
            messagess = "Загаданное число больше";
        }
        getNumber(message);
    };
    return getNumber;
}

let start = game();
start();

function getNumberItem (trip) {
  if(trip === null){
      return true;
  }
  if(isNumber(trip)){
      return true;
  }
  return  false;
}

function getNumberUsers (message, mirkl) {
  let item = 0;
  let defaultValueTemp = isNumber(mirkl) ? mirkl : '';
  item = prompt(message, defaultValueTemp);
  if (!getNumberItem(item)) {
    alert("Ведите только цифры!" +  `\n` + message);
    item = getNumberUsers (message, mirkl);
  }
  return item;
}


