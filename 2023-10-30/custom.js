var a, player, i, winCondition;
var verifica = new Array(9);
a = 1;
player = 1;
i = 0;
winCondition = false;

function checkWinCondition() {
    for (let j = 0; j < 3; j++) {
        if (
            (verifica[j] === verifica[j + 3] && verifica[j + 3] === verifica[j + 6] && verifica[j] !== undefined) ||
            (verifica[j * 3] === verifica[j * 3 + 1] && verifica[j * 3 + 1] === verifica[j * 3 + 2] && verifica[j * 3] !== undefined)
        ) {
            return true;
        }
    }

    if (
        (verifica[0] === verifica[4] && verifica[4] === verifica[8] && verifica[0] !== undefined) ||
        (verifica[2] === verifica[4] && verifica[4] === verifica[6] && verifica[2] !== undefined)
    ) {
        return true;
    }

    return false;
}

function insert(num) {
    if (verifica[num - 1] === undefined) {
        verifica[num - 1] = player;

        if (a <= 9) {
            if (a % 2 == 0) {
                player = 1;
                a++;
            } else {
                player = 2;
                a++;
            }

            document.getElementById(num).innerHTML = player === 1 ? "O" : "X";
            i++;

            if (checkWinCondition()) {
                winCondition = true;
            }

            document.getElementById('turno').innerHTML = "Turno: Jogador " + player;

            if ((i == 9) || (winCondition == true)) {
                document.getElementById('turno').innerHTML = "FIM DE JOGO";
                if (winCondition == true) {
                    alert("Parabéns Jogador " + (player === 1 ? 2 : 1) + ", você venceu o jogo!");
                } else {
                    alert('EMPATE!');
                }
            }
        }
    }
}

function reinc() {
    for (i = 0; i < 9; i++) {
        document.getElementById(i + 1).innerHTML = "";
        verifica[i] = undefined;
    }
    winCondition = false
    a = 1;
    i = 0;
    player = 1;
    document.getElementById('turno').innerHTML = "Turno: Jogador " + player;
    alert("O tabuleiro será limpo, podem recomeçar o jogo.");
}
