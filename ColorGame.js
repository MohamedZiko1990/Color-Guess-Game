var numOfSquares = 6;
var colors = generateRandoms(numOfSquares);
var squares = document.getElementsByClassName("square");
var colorDisplayed = document.getElementById("displayedColor");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyMode");
var hardButton = document.getElementById("hardMode");

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numOfSquares = 3;

  reset();
});

hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numOfSquares = 6;

  reset();
});

function reset() {
  colors = generateRandoms(numOfSquares);
  pickedColor = pickColor();
  colorDisplayed.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Game";

  //change Squares colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplayed.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      messageDisplay.textContent = "Correct";
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again";
    } else {
      this.style.backgroundColor = "black";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// Function to change all squares color to correct color when clicked
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//pick Random color from generated colors in the colors array
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// generate Random array of colors
function generateRandoms(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// generate random color with 3 random fraction of colors
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var str = "rgb(" + red + ", " + green + ", " + blue + ")";

  return str;
}
