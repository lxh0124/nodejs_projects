   var Ball = function () {
        var img = loadImage("ball.png");

        var o = {
            x: 150,
            y: 200,
            speedX: 5,
            speedY: 5,
            speed: 10,
            image: img,
        }
        o.updateRedirectionY = function() {
            o.speedY = -1 * o.speedY;
        }
        o.updateRedirectionX = function() {
            o.speedX = -1 * o.speedX;
        }
        o.update = function () {
            if(o.x >= canvas.width - o.image.width || o.x <= 0){
               o.updateRedirectionX(); 
            }
            
            if( o.y <= 0){    
                o.updateRedirectionY(); 
            }

            if(o.y >= canvas.height - o.image.height) {
                o.speedY = 0 ;
                o.speedX = 0 ;
            }

            o.x = o.speedX + o.x;
            o.y = o.speedY + o.y;

        }

        return o;
    };