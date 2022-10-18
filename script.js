'use strict';

let number = randomNumber();


function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
function randomNumber() {
    return Math.round(Math.random() * 100);
}

function startGame() {
    function game() {
        let answer = prompt('Угадай число от 1 до 100');
        switch (true) {
            case !isNumber(+answer):
                alert('Введите число');
                game();
                break;
            case answer === null:
                alert('Игра окончена');
                return null;
            case answer > number:
                alert('Загаданное число меньше');
                break;
            case answer < number:
                alert('Загаданное число больше');
                break;
            default:
                alert('Ура вы угадали');
                return number;
        }
        return game();
    }

    game();
}

startGame();