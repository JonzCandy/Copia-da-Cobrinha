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

function iniciarJogo() {
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