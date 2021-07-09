let canvas = document.getElementById("cachorro");
let context = canvas.getContext("2d");
let box = 32;
let cachorro = [];
cachorro[0] = {
    x: 8 * box,
    y: 8 * box
}

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

criarBG();
criarCachorro();