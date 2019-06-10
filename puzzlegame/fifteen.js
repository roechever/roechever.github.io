(function () {
    "use strict";
    var empX = 300;
    var empY = 300;
    //The move function checks if the empty place is the immidiate 
    //TOP,Bottom,Right or left of the clicked div and moves the the clicked div
    // replace the empty place.
    //it also keeps track of the position of the empty square using the 
    //global variables(empX/empY)
    function move() {
        if (isMovable(this.x, this.y)) {

            var tempX = this.x;
            var tempY = this.y;

            this.x = empX;
            this.y = empY;
            $(this).attr('id', (this.x / 100) + "_" + (this.y / 100));
            //alert("new id" + (this.x / 100) + " " + (this.y / 100));

            empX = tempX;
            empY = tempY;

            $(this).css({
                'left': this.x + 'px',
                'top': this.y + 'px'
            });
			gameOver();

        }
    }

    function init() {
        $("#puzzlearea div").each(function (idx) {
            // calculate x and y for this piece
            var x = ((idx % 4) * 100);
            var y = (Math.floor(idx / 4) * 100);
            //declare col and row variables to hold the backgroung position property
            // set basic style and background 
            //add class and ID(based on x and y)
            $(this).addClass("puzzlepiece");
            $(this).attr('id', (x / 100) + "_" + (y / 100));

            $(this).css({
                'left': x + 'px',
                'top': y + 'px',
                'background-image': 'url("background.jpg")',
                'background-position': -((idx % 4) * 100) + 'px ' + (-(Math.floor(idx / 4) * 100)) + 'px'

            });
            // store x and y for later
            this.x = x;
            this.y = y;




        });

    }

    function isMovable(x, y) {
        if (isTop(x, y) || isBottom(x, y) || isRight(x, y) || isLeft(x, y)) {
            return true;
        }
        return false;
    }
    //isTop function checks if the empty place is the immidiate top of the clicked div
    function isTop(x, y) {

        if (empX === x && empY === y - 100) {
            return true;
        }
        return false;
    }
    //isBottom function checks if the empty place is the immidiate Bottom of the clicked div
    function isBottom(x, y) {
        if (empX === x && empY === y + 100) {
            return true;
        }
        return false;
    }
    //isRight function checks if the empty place is the immidiate Right of the clicked div
    function isRight(x, y) {
        if (empX === x + 100 && empY === y) {
            return true;
        }
        return false;
    }
    //isLeft function checks if the empty place is the immidiate Left of the clicked div
    function isLeft(x, y) {
        if (empX === x - 100 && empY === y) {
            return true;
        }
        return false;
    }

    function highlight() {

        if (isMovable(this.x, this.y)) {
            $(this).addClass("movablepiece");
        }

    }
    //when the mouse leavs the div the dehighlight function removes the class 
    //'movablepiece' from the div on whic the mouse was over
    function dehighlight() {

        if ($(this).hasClass("movablepiece")) {
            $(this).removeClass("movablepiece");
        }
    }
    //the shuffle method shuffles the divs     
    function shuffle() {
        for (var i = 0; i < 1000; i++) {
            //alert("iteraion " + i);
            var Col = Math.floor((Math.random() * 4) % 4);
            var Row = Math.floor((Math.random() * 4) % 4);

            if ((Col !== empX / 100) || (Row !== empY / 100)) {
                var selected = $("#" + Col + "_" + Row);
                //use tigger method to emitate as if the div has been clicked.                             
                //check if the randomly selected DOM object is movable before calling triggerHandler
                if (isMovable(selected[0].x, selected[0].y)) {
                    selected.triggerHandler("click");
                }
            }
        }

    }
	//checks and prints message if game is over
	//The game is over when all the divs are placed orderly
	function gameOver(){
	
	var col=0;
	var row=0;
	$(".puzzlepiece").each(function(){
	
	if($(this).attr('id')==col+"_"+row){	
	col++;
	if(col==4){
	col=0;
	row++;
	}
	}	
	});
	if(row==3&&col==3){
	alert("You Won!!");
	}
	}

    $(function () {
        init();
        $("div.puzzlepiece").click(move);
        $("div.puzzlepiece").mouseover(highlight);
        $("div.puzzlepiece").mouseleave(dehighlight);
        $("#controls").click(shuffle);

    });
}());