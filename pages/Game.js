var pos = [
    { x: 0, y: 0, },
    { x: 50, y: 0, },
    { x: 100, y: 0, },
    { x: 150, y: 0, },
    { x: 200, y: 0, },
    { x: 250, y: 0, },
    { x: 300, y: 0, },
    { x: 350, y: 0, },
]

var Game = function () {

    var panel = Panel();
    var ball = Ball();
    actions["ArrowLeft"] = panel.moveLeft;
    actions["ArrowRight"] = panel.moveRight;
    var blocks = [];
    //console.log(pos.length)
    for (i = 0; i < 12; i++) {
        for (j = 0; j < 5; j++) {
            var block = Block({ x: i * 50, y: j * 30 });
            blocks.push(block);
        }

        //console.log('add block...')
    }
    //console.log(blocks)




    var o = {
        speed: 30,
        panel: panel,
        ball: ball,
        actions: actions,
        blocks: blocks,
    }
    o.clear = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    o.isWin = function () {
        var ret = false;
        for (i = 0; i < blocks.length; i++) {
            var block = blocks[i];

        }

        return ret;
    }
    o.isOver = function () {
        return ball.y > canvas.height;
    }
    o.update = function () {
        if (matched(panel, ball)) {
            ball.updateRedirectionY();
        }

        ball.update();
    }
    o.redraw = function () {
        ctx.drawImage(panel.image, panel.x, panel.y);
        ctx.drawImage(ball.image, ball.x, ball.y);
        //console.log(blocks)


        for (i = 0; i < blocks.length; i++) {
            var block = blocks[i];

            if (block.alive == true && matched(block, ball)) {
                block.alive = false;
                ball.updateRedirectionY();
            }

            if (block.alive) {
                ctx.drawImage(block.image, block.x, block.y);
            }
        }


    }
    return o;
}