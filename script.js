
function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function startGame(number) {
    function game() {
        let answer = +prompt('Угадай число от 1 до 100');
        if (isNumber(answer)) {
            if (answer > number) {
                alert('Загаданное число меньше');
                game();
            } else if (answer < number) {
                alert('Загаданное число больше');
                game();
            } else if (answer === number) {
                alert('Ура вы удагали');
            }
        } else if (answer === null) {

            alert('Игра окончена');
        } else if (!isNumber(answer)) {
            alert('Введи число');
            game();
        }
    }

    game();
}

startGame(23);