let tabuleiro;
let board;
let aviso;
let jogador;

function iniciar() {
    tabuleiro = [];
    board = document.getElementById("board");
    aviso = document.getElementById("aviso");
    jogador = 1;

    for (let i = 0; i < 3; i++) {
        tabuleiro[i] = [];
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = 0;
        }
    }

    console.table(tabuleiro);
    exibir();
}

function exibir() {
    let tabela = '<table cellpadding="10" border="1">';

    for (let i = 0; i < 3; i++) {
        tabela += "<tr>";
        for (let j = 0; j < 3; j++) {
            let simbolo = tabuleiro[i][j] === 1 ? "X" : tabuleiro[i][j] === -1 ? "O" : "_";
            tabela += `<td onclick="Jogar(${i}, ${j})">${simbolo}</td>`;
        }
        tabela += "</tr>";
    }
    tabela += "</table>";

    board.innerHTML = tabela;
}

function Jogar() {
    let linha = parseInt(document.getElementById("linha").value) - 1;
    let coluna = parseInt(document.getElementById("coluna").value) - 1;

    // Verifica se os valores são válidos
    if (isNaN(linha) || isNaN(coluna) || linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
        aviso.innerHTML = "Escolha uma linha e coluna válidas!";
        return;
    }

    if (tabuleiro[linha][coluna] === 0) {
        tabuleiro[linha][coluna] = jogador === 1 ? 1 : -1;
        jogador = jogador === 1 ? 2 : 1;
        aviso.innerHTML = "Vez do Jogador: " + jogador;
    } else {
        aviso.innerHTML = "Posição já ocupada!";
    }

    console.table(tabuleiro);
    exibir();
}

function checar() {
    // Implementação da verificação de vitória pode ser adicionada aqui
}
