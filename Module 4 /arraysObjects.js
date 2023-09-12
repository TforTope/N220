let grades = [78,86,92,77]
var ansText = document.getElementById('answers');

ansText.innerHTML = "Array: " + grades;
ansText.innerHTML +="<br>Second Value: " + grades[1]
grades[1]=83; 
ansText.innerHTML += "<br>Array: " + grades;
ansText.innerHTML += "<br>Array Length: " + grades.length 
let lastGrade = grades.length-1; //3 
let changeLastGrade = ++grades[lastGrade]; //78
ansText.innerHTML += "<br>New Grade: " + changeLastGrade; 
//grades[grade.length-1]++; 
ansText.innerHTML += "<br>Array: " + grades;
let gradeTotal = grades[0]+grades[1]+grades[2]+grades[3];
ansText.innerHTML += "<br>Average Grade: " + gradeTotal/grades.length;

ansText.innerHTML += "<br>Above 80: " + ((gradeTotal/grades.length)>80);

let tops = ["tshirt", "blouse", "tank", "button-up", "sweater", "sweatshirt"];
tops.push("hoodie");

let bottoms = ['slacks','jeans', 'shorts', 'skirts'];

let outfits = [tops,bottoms];

document.write(outfits[0][4], outfits[1][1]); 
//Add a value at the end
tops.push("hoodie"); 




var eaText = document.getElementById('extraAnswers');
eaText.innerHTML = "Array after push: " + tops; 

//Remove last value 
tops.pop(); 

eaText.innerHTML += "<br>Array after push: " + tops; 

//Remove first value 
tops.shift();

eaText.innerHTML += "Array after shift: " + tops; 

//Add value at tthe beginning 
tops.unshift("T-shirt");

eaText.innerHTML += "Array after unshift: " + tops; 

//Add/Remove any value in an array 
//Target Blouse 

tops.splice(1,1);

eaText.innerHTML += "Array after removing blouse: " + tops; 

//Add blouse and hoodie after button-up 
tops.splice(3,0,"blouse", "hoodie");


//objects 

const friend = {
    fName: "William",
    lname: "Shakespeare",
    age: 23, 
    hometown: "Stratford", 
    fullName: function(){ 

        return this.fName + " " + this.lname; 

    }
}

friend.hometown="Parsonville"
document.getElementById('fullName').innerHTML =friend.fullName() + "was born in " + friend.hometown; 
//freind ['hometowmn']; 

const car ={ 
    year: 2020,
  make: "Dodge",
  model: "Charger",
  automatic: false,
  mpg:17,
  efficiency: function() {
    return (this.mpg>40);
  }
}

document.getElementById('car').innerHTML = "I own a " + car.year + " " + car.make + " " + car.model + "."; 

document.getElementById('gasEff').innerHTML = car.make + " " + car.model + " Efficiency: " + car.efficiency(); 