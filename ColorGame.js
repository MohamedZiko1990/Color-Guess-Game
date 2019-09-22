var numOfSquares = 6;
var pickedColor;
var colors = generateRandoms(numOfSquares);
// Get DOM elments
var squares = document.getElementsByClassName("square");
var colorDisplayed = document.getElementById("displayedColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
// Game Buttons
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyMode");
var hardButton = document.getElementById("hardMode");

generate();

function generate() {
  setMode();
  setBoard();
  reset();
}

function setMode() {
  //Easy Mode Button
  easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;

    reset();
  });

  //Hard Mode Button
  hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfSquares = 6;

    reset();
  });
}

function setBoard() {
  for (var i = 0; i < squares.length; i++) {
    // Add colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare color to picked color
      if (clickedColor === pickedColor) {
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct";
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again";
      } else {
        messageDisplay.textContent = "Try Again!";
        this.style.backgroundColor = "black";
      }
    });
  }
}

function reset() {
  colors = generateRandoms(numOfSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  // Change colorDisplayed to Match color picked
  colorDisplayed.textContent = pickedColor;
  // Reset styles and texts
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Game";
  // Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

// Generate Random array of colors using numOfSquares
function generateRandoms(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

// Generate random RGB color
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var str = "rgb(" + red + ", " + green + ", " + blue + ")";

  return str;
}

// Pick random color from random generated colors in the colors array
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Change all squares colors to the correct color when clicked
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// New Game Button
resetButton.addEventListener("click", function() {
  reset();
});
