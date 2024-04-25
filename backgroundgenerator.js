// Select the elements we are using
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];

// This function sets the background to a linear gradient, with the first and second colour the user has picked
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Getting a random colour
function getRandomColor() {
  let hexColor = Math.random().toString(16);
  hexColor = "#" + hexColor.slice(2, 8);
  return hexColor;
}

//function to be used with event listener which will set the random background, will be called when button is clicked.
function setRandomBackground() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

// Calling the function ensures the initial colour inputs match the background when the page is first loaded and the CSS linear gradient property is shown when the page is first loaded. 
setGradient(); 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomBackground);