//Create array of different colors
var colors = generateRandoms(6);

//Select the 6 Squares from the DOM
var squares = document.getElementsByClassName("square");

//Select the RGB Span in DOM
var colorDisplayed = document.getElementById("displayedColor");

// Select Color from Colors Array
var pickedColor = pickColor();

//Select the h2 Span in DOM
var messageDisplay = document.getElementById("message");

//Change RGB Span to one of the array Colors
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
