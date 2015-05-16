// canvas variables
var container

// global vars
var matrix;
var numMoves = 0;

var PADDING = 1; // fraction of square size

// load the page
// main entry point
function init() {
	container = document.getElementById("game_container");
	//resizeCanvas();
}

function resizeCanvas() {
	// set the canvas size to the container size
	canvas.style.width = canvasContainer.clientWidth + "px";
	canvas.style.height = canvasContainer.clientHeight + "px";
	canvas.width = canvasContainer.clientWidth;
	canvas.height = canvasContainer.clientHeight;
}

function startButtonPressed() {
	startGame();
}

function startGame(){
	numMoves = 0;
	$("#game_container").html("");
	var numRows = parseInt(document.getElementById("num_rows").value);
	var numColumns = parseInt(document.getElementById("num_columns").value);
	var difficulty = $("#difficulty").val();
	difficulty = Math.pow(Math.sqrt(numRows * numColumns), difficulty);
	matrix = generateMatrix(numRows, numColumns, difficulty);
	drawSquares();
}

/*function generateMatrix(x, y) {
	boolean[][] matrix = new Array[x][y];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; i++) {
			matrix[i][j] = (Math.random()<.5); // random boolean
		};
	};
	return matrix;
}*/

function generateMatrix(x, y, numFlips) {
	var matrix = new Array(x);
	for (var i = 0; i < matrix.length; i++) {
		matrix[i] = new Array(y);
		for (var j = 0; j < matrix[i].length; j++) {
			matrix[i][j] = true;
		};
	};
	for (var k = 0; k < numFlips; k++) {
		flipSquare(parseInt(Math.random() * (matrix.length)), parseInt(Math.random() * (matrix[0].length)), matrix);
	};
	return matrix;
}

function buttonPressed(id) {
	numMoves++;
	id = id.split("x");
	id = id[1].split("y");
	flipSquare(parseInt(id[0]), parseInt(id[1]), matrix);
	refreshScreen();
	if (checkWin()) {
		win();
		startGame();
	}
}

function flipSquare(x, y, matrix) {
	matrix[x][y] = !matrix[x][y];
	if (x > 0) matrix[x-1][y] = !matrix[x-1][y];
	if (x < (matrix.length - 1)) matrix[x+1][y] = !matrix[x+1][y];
	if (y > 0) matrix[x][y-1] = !matrix[x][y-1];
	if (y < matrix[x].length - 1) matrix[x][y+1] = !matrix[x][y+1];
}

function refreshScreen() {
	for (var x = 0; x < matrix.length; x++) {
		for (var y = 0; y < matrix[x].length; y++) {
			var id = "x"+x+"y"+y;
			if (matrix[x][y])
				$("#" + id).attr("class", "button on");
			else $("#" + id).attr("class", "button off");
		};
	};
}

function checkWin() {
	for (var x = 0; x < matrix.length; x++) {
		for (var y = 0; y < matrix.length; y++) {
			if (!matrix[x][y])
				return false;
		}
	}
	return true;
}

function win() {
	alert("Won in "+numMoves+" moves!");
}

function drawSquares() {
	for (var x = 0; x < matrix.length; x++) {
		for (var y = 0; y < matrix[x].length; y++) {
			$("#game_container").append('<input type="button" id="x'+x+'y'+y+'" onclick="buttonPressed(this.id)" class="off">');
		};
		$("#game_container").append("<br>");
	};
	refreshScreen();
}