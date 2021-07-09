let canvas = document.getElementById("cachorro");
let context = canvas.getContext("2d");
let box = 32;
let cachorro = [];
cachorro[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";

function criarBG() {
    context.fillStyle = "Lightgray";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCachorro() {
    for (i = 0; i < cachorro.length; i++) {
        context.fillStyle = "yellow";
        context.fillRect(cachorro[i].x, cachorro[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direcao != "right") direcao = "left";
    if (event.keyCode == 38 && direcao != "down") direcao = "up";
    if (event.keyCode == 39 && direcao != "left") direcao = "right";
    if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {

    if (cachorro[0].x > 15 * box && direcao == "right") cachorro[0].x = 0;
    if (cachorro[0].x < 0 * box && direcao == "left") cachorro[0].x = 16 * box;
    if (cachorro[0].y > 15 * box && direcao == "down") cachorro[0].y = 0;
    if (cachorro[0].y < 0 * box && direcao == "up") cachorro[0].y = 16 * box;

    criarBG();
    criarCachorro();

    let cachorroX = cachorro[0].x;
    let cachorroY = cachorro[0].y;

    if (direcao == "right") cachorroX += box;
    if (direcao == "left") cachorroX -= box;
    if (direcao == "up") cachorroY -= box;
    if (direcao == "down") cachorroY += box;

    cachorro.pop();

    let newHead = {
        x: cachorroX,
        y: cachorroY
    }

    cachorro.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);