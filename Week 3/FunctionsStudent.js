function changeTxt() { 
document.getElementById ('changeTxt').innerHTML = "This text has been changed"; } 

changeTxt();

function noPram() { document.write ("this function does not take paramenters."); } 

noPram(); 

var greet = function() { console.log("Hello World!"); 

} 

greet();
var favBand  = "Teddy Swims"; 

function favoriteBand(favBand) { document.getElementById ('favBand').innerHTML = favBand; } 

favoriteBand(favBand);

function myName(first) { console.log(first); }

myName('Carrie');
myName('Greg');
myName(" My dog is awesome");
myName(34) 

var recHeight = 20;
var recWidth = 34; 

function recPerm(h,w) { let perimeter = 2*h+2*w; return perimeter; }

 document.getElementById ('panswer').innerHTML =  recPerm(recHeight, recWidth) + "feet" ; 


function calcArea() {  let h = document.getElementById('height').value; 
let w = document.getElementById('width').value;
var area = h*w; 
console.log(area);
document.getElementById('answer').innerHTML = area; 
} 

function totalRect(h,w){ 
let perm = recPerm(h,w); 
let area = h*w;
let recInfo = [perm, area]; 
return recInfo;
}

document.getElementById
('multiAnswer').innerHTML = "Perimeter" + totalRec(recHeight, recWidth)[0]+ "feet <br/>Area: " + totalRec(recHeight, recWidth)[1] + "squae feet. ";

function myFunction(){
    alert ("who goes there?")
}

function wizard(name, job){ 
    document.getElementById 
    ('future').innerHTML = "Welcome"
    + name + ", the " + job + "!"
}

function addItem() {
    let item = prompt("Add Item");
console.log(item);
alert("You added " + item + "to your list")
}