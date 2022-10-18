
function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
function randomNumber() {
    return Math.round(Math.random() * 100);
}

function startGame(number, numAtt) {
    number = randomNumber();
    numAtt = 10;
    function game() {
        let answer = +prompt('Угадай число от 1 до 100');
        switch (true) {
            case !isNumber(answer):
                alert('Введите число');
                game();
                break;
            case answer === 0:
                alert('Игра окончена');
                break;
            case answer > number:
                alert('Загаданное число меньше');
                game();
                break;
            case answer < number:
                alert('Загаданное число больше');
                game();
                break;
            case answer === number:
                alert('Ура вы угадали');
                break;
        }
    }

    game();
}

startGame();