var Block = function(pos) {
    var img = loadImage("block.png");

    var o = {
        x: pos.x,
        y: pos.y,
        image: img,
        alive: true,
    }

    o.redraw = function() {
        
    }
    return o;
}