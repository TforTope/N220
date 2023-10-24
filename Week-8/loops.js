//For loop 
for(let i=0;i<5;i++){
    document.getElementById('for').innerHTML+=i+" ";
}

//While loop 
let weeks = 5; 
while(weeks>1) { 

    document.getElementById('while').innerHTML+="There are"+ weeks + " weeks until Thanksgiving Break. <br/>";
    weeks--;
}

//Do While loop 
let candy = -3;
do {
    document.getElementById('doWhile').innerHTML+="I have " + candy + " pieces of candy.<br/>";
    candy--;
} while(candy>0);

//Loops problems 
//Problem 1 
let months = ['January','February',"March",'April','May','June'];

let monthList='';
for(let m=0; m<months.length;m++) { 
    monthList+= months[m] + " ";
}
document.getElementById('an1').innerHTML = monthList

//Problem 2 

let monthList2='<ol>';
for(let m2=0; m2<months.length;m2++) { 
    monthList2+= "<li>"+months[m2] + "</li> ";
}
monthList2+="</ol>";
document.getElementById('an2').innerHTML = monthList2;

//Problem 3 
let slices=9;
while(slices>=2){
    document.getElementById('an3').innerHTML+="There are " + slices + "slices of pizza left.<br/>.";
    slices--;
}
//Problem 4 
let num = 15 
do { 
    document.getElementById('an4').innerHTML+="NUmber Count: " + num +"<br/>";
    num++;
} while(num<20);

//Problem 5 
let today = new Date ();
let tDate = today.getDate();//10 
for (let d=50; d>=5; d=d-5) {//d=d-5; d-=5
    document.getElementById('an5').innerHTML+=d+" ";
if(d==tDate){ 
    document.getElementById('an5').innerHTML+="<br/>That's today's date.<br/> ";
    break;
}
}

//Problem 7 
let tickets = 10;
let ticketsText='';
while(tickets>0) {
    tickets--;
    if(tickets==0) {
        ticketsText+="All tickets are benn sold.";
        break;
    }
    ticketsText+="Another seat is gone. Only " + tickets + "tickets left.<br/>";
    if(tickets==5) {
        ticketsText+="Half of the tickets are sold. Buy yours now.<br/>";
    }
    //document.getElementById('an7').innerHTML = ticketsText;

    
}


//For in 

const Course = {
    "cNum":"N220",
    "title":"Intro to Javascript",
    "enrolled":20,
    "prereq":false,
    "offering": ['Fall','Spring']
}
for(p in Course){ 

    document.getElementById('forIn').innerHTML+=p + ": " + Course[p];

}

for(month in months){ 

    console.log(month + ": " + months[month]);
}
//For of 

//for(p of Course){ 
//   document.getElementById('forOf').innerHTML+=p + ": " + Course[p];

//}

for(month of months){ 

    console.log(month);
}