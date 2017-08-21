var loadImage = function (imagePath) {
    var img = new Image()
    img.src = imagePath;
    return img;
}

var isInRange = function (x, y, x1, y1, x2, y2) {

    var mx = x >= x1 && x <= x2;
    var my = y >= y1 && y <= y2;

    return mx && my;
}

var isInPanelRange = function (panel) {
    //console.log(panel.x, panel.y, panel.x + panel.image.width, panel.y + panel.image.height)
    return function (x, y) {
        return isInRange(x, y, panel.x, panel.y, panel.x + panel.image.width, panel.y + panel.image.height);
    }
}

var matched = function (panel, ball) {
    var isInPanel = isInPanelRange(panel);
    var m1 = isInPanel(ball.x, ball.y);
    var m2 = isInPanel(ball.x, ball.y + ball.image.height);

    var m3 = isInPanel(ball.x + ball.image.width, ball.y);
    var m4 = isInPanel(ball.x + ball.image.width, ball.y + ball.image.height);
   // console.log(m1, m2, m3, m4)
    if (m1 || m2 || m3 || m4) {
        return ball;
    } else {
        return null;
    }
}



