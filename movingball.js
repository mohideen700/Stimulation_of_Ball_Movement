

        var velocity = 3;

        var positionX = 0;
        var reverse = false;

        var positionX2 = window.innerWidth - 50;
        var reverse2 = false;

        var ball = document.getElementById("ball");
        var ball2 = document.getElementById("ball2");


        function moveball() {

            var xMin = 0;
            var cMax = window.innerWidth - 50;



            if (reverse) {
                positionX = positionX - velocity;
            } else {
                positionX = positionX + velocity;
            }

            ball.style.left = positionX + "px";

            if (positionX >= cMax) {
                reverse = true;
            }

            if (positionX <= xMin) {
                reverse = false;
            }



            if (reverse2) {
                positionX2 = positionX2 + velocity;
            } else {
                positionX2 = positionX2 - velocity;
            }

            ball2.style.left = positionX2 + "px";

            if (positionX2 <= xMin) {
                reverse2 = true;
            }

            if (positionX2 >= cMax) {
                reverse2 = false;
            }

        }


        setInterval(moveball, 10);


       
        window.addEventListener("resize", function () {

            if (positionX > window.innerWidth - 50) {
                positionX = window.innerWidth - 50;
            }

            if (positionX2 > window.innerWidth - 50) {
                positionX2 = window.innerWidth - 50;
            }

        });
