
var h1Element = document.getElementById("title");
h1Element.textContent = "DOM Manipulation";


var containerElement = document.getElementById("container");
containerElement.style.backgroundColor = "lightblue";

var ulElement = containerElement.querySelector("ul");
var newItem7 = document.createElement("li");
newItem7.textContent = "Item 7";
ulElement.appendChild(newItem7);

var listItems = ulElement.getElementsByTagName("li");
listItems[0].style.color = "crimson";
listItems[2].style.backgroundColor = "pink";
listItems[4].style.backgroundColor = "yellow";
listItems[6].style.backgroundColor = "lightGray";
listItems[6].style.color = "royalBlue";

var newItem8 = document.createElement("li");
newItem8.textContent = "Your Name";
ulElement.appendChild(newItem8);

var fourthItem = listItems[3];
ulElement.removeChild(fourthItem);

var buttonElement = document.getElementById("btn");
var italicElement = document.createElement("i");
italicElement.textContent = "Click Me";
buttonElement.textContent = "";
italicElement.style.backgroundColor = "rebeccapurple";
italicElement.style.color = "white";
italicElement.style.border = "1px solid white";
buttonElement.appendChild(italicElement);
