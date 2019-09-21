var colors = generateRandoms(6);
var squares = document.getElementsByClassName("square");
var colorDisplayed = document.getElementById("displayedColor");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
  //Generate new Random Colors
  colors = generateRandoms(6);
  //change Squares colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  //change pickedcolor
  pickedColor = pickColor();
  //change assigned picked color to array
  colorDisplayed.textContent = pickedColor;
  // Remove message displayed
  messageDisplay.textContent = "";
  // change h1 background color
  h1.style.backgroundColor = "black";
  // Change button text
  resetButton.textContent = "New Game";
});

colorDisplayed.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // Assign Color from colors array to each square
  squares[i].style.backgroundColor = colors[i];

  //Assign EventListener for each square
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    // Check if Clicked color equals RGB picked color
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
  //Create new array
  var arr = [];

  // loop with num times to push random colors into the array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  //return the random color array
  return arr;
}

// generate random color with 3 random fraction of colors
function randomColor() {
  // generate random red color
  var red = Math.floor(Math.random() * 256);
  // generate random green color
  var green = Math.floor(Math.random() * 256);
  // generate random blue color
  var blue = Math.floor(Math.random() * 256);

  // Create RGB string
  var str = "rgb(" + red + ", " + green + ", " + blue + ")";

  return str;
}
