let width, height, diameter, total, current, flg, y, flgRect, flgSpeed;
function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    diameter = 150;
    total = 229;
    current = 0;
    flg = 0;
    flgRect = 0;
    flgSpeed = 0;
    y = height - 50;
    createCanvas(width, height);
}

function draw() {
    background(255, 252, 228);
    drawRectangles();
    drawCircles();
}

function drawCircles() {
    for (let i = 0; i < 20; i++) {
        noStroke();
        fill(total - current);
        ellipse(width / 4, height / 2, diameter, diameter);
        ellipse(3 * width / 4, height / 2, diameter, diameter);
        if (flg) {
            current--;
            if (current <= 0) {
                flg = !flg;
            }
        } else {
            current++;
            if (current >= total) {
                flg = !flg;
            }
        }
    }
}

function drawRectangles() {

    rectMode(CENTER);
    fill(0);
    rect(width / 4, y, width / 2, 2 * (height - y));
    fill(total);
    rect(3 * width / 4, y, width / 2, 2 * (height - y));
    if (flgSpeed) {
        if (flgRect) {
            y++;
            if (y > height) {
                flgRect = !flgRect;
            }
        } else {
            y--;
            if (y - (height - y) <= 0) {
                flgRect = !flgRect;
            }
        }
    }
    flgSpeed = !flgSpeed;
}