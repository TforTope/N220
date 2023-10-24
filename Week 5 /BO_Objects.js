// Create a Course object
const course = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    enrolled: 18,
  
    // Calculate availability
    isAvailable: function() {
      return this.enrolled < this.totalSeats;
    }
  };
  
  // Print the initial availability
  console.log(`${course.courseNumber} Open: ${course.isAvailable()}`);
  
  // Enroll two more students
  course.enrolled += 2;
  
  // Print the updated enrollment
  console.log(`Enrolled students: ${course.enrolled}`);
  
  // Print the updated availability
  console.log(`${course.courseNumber} Open: ${course.isAvailable()}`);
  


  course.enrolled=course.enrolled+2; 
  // course.enrolled+=2;
  console.log(course.enrolled);

  console.log(courseNumber + " Open: " + course.isAvailable()); 

  let pageDetails = "height: " + window.innerHeight + "<br/>Width: " + window.innerWidth; 

  document.getElementById("hwDetails").innerHTML = pageDetails;

  function IUPUIWebsite() { 
    open("http://www.iupui.edu")

  }

  function printPage() { 
    print();
  }

  document.getElementById("wpDetails").innerHTML = window.location +"<br/>" + document.URL 
  //use window.location get and set 

  document.getElementById('domain'). innerHTML = "Domain: " + document.domain; //TBD

  document.getElementById('update'). innerHTML = "Last Modified: " + document.lastModified; //TBD

  function getGreeting() { 
    let greeting = document.getElementById('greeting').value;

    //console.log("Greeting", greeting)


    let gMsg ="Your message is " +  greeting.length;

    let middleC = greeting.length/2; 

    gMsg +="The middle character is " + greeting.charAt(middleC);

    document.getElementById('MessageInfo').innerHTML = gMsg;
  }

let newText = "I hope this works";
newText = newText.toUpperCase();

newText=newText.replace("hope", "thiink").toLowerCase();

  document.getElementById('coolText').innerHTML = newText; 
  

 let classList = document.getElementById('classes').innerHTML; 
 
 console.log(classList);

 let classListArray = classList.split(", "); 
 console.log(classListArray);

 document.getElementById('class').innerHTML = classListArray[2]; 

var newNumber = 6.675675464 
document.getElementById('fixed').innerHTML = newNumber.toFixed(1);

document.getElementById('precise').innerHTML = newNumber.toPrecision(5)

var myPi = Math.PI;
console.log(myPi);

document.getElementById('round').innerHTML.Math.round(myPi);
document.getElementById('ceil').innerHTML.Math.ceil(myPi);
document.getElementById('floor').innerHTML.Math.floor(myPi);

var rNum = Math.random()*10;

document.getElementById('random').innerHTML = Math.ceil(rNum); 


//Date Object 

const today = new Date(); 
document.write("Day:" + today.getDay());
document.write("<br>Date:" + today.getDate());
document.write("<br>Year:" + today.getFullYear());
document.write("<br>Today's Date:" + today.toDateString());
document.write("<br>Today's Time:" + today.toTimeString());


