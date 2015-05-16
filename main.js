// canvas variables
var canvas;
var context;
var canvasContainer;

// global vars
var matrix;

var PADDING = 1; // fraction of square size

// load the page
// main entry point
function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvasContainer = document.getElementById("graph_border");
	resizeCanvas();
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
	var numRows = document.getElementById(num_rows).value;
	var numColumns = document.getElementById(num_columns).value;
	matrix = generateMatrix(numRows, numColumns);
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
	var matrix = new Array[x][y];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; i++) {
			matrix[i][j] = false;
		};
	};
	for (var j = 0; j < numFlips, j++) {
		flipSquare(int(random() * (matrix.length-1)), int(random() * (matrix[0].length-1)));
	}
	return matrix;
}

function buttonPressed(id) {
	flipSquare(x, y);
}

function flipSquare() {
	matrix[x][y] = !matrix[x][y];
	if (x > 0) matrix[x-1][y] = !matrix[x-1][y];
	if (x < matrix.length) matrix[x+1][y] = !matrix[x+1][y];
	if (y > 0) matrix[x][y-1] = !matrix[x][y-1];
	if (y < matrix[x].length) matrix[x][y+1] = !matrix[x][y+1];
}

function refreshScreen() {

}

function drawSquares(matrix) {
	var squareSize = [(canvas.width - PADDING * matrix.length) / matrix.length, (canvas.height - PADDING * matrix[0].length) / matrix[0].length];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++)
			{
		}
	}
}