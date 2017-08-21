var Panel = function () {
    var img = loadImage("panel.png");

    var o = {
        x: 100,
        y: 280,
        speed: 40,
        image: img,
    }

    o.moveLeft = function () {
        console.log('left');

        o.x = o.x - o.speed;
        if (o.x <= 0) {
            o.x = 0;
        }
    }
    o.moveRight = function () {
        console.log('right');
        o.x = o.x + o.speed;
        if (o.x >= canvas.width - o.image.width) {
            o.x = canvas.width - o.image.width;
        }
    }
    o.update = function () {

    }
    return o;
};