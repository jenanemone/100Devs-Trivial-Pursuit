// Draw the board first with canvas API
const canvas = document.getElementById('canvas');

function draw() {
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(400, 400, 300, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(400, 400, 200, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.stroke();
    }
}

draw();