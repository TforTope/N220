
function leaveRoom() { 
    alert("you chose to leave room. Chicken.");
}

function enterRoom(){
    alert("You chose to enter the room and it's dark.");
    if(tool.toUpperCase()==="SHOVEL") {
        alert("The shovel came in handy. you knocked out the beast by hitting him on the head with " + tool + ".");
    } else if(tool.toUpperCase()==="LADDER") {
        alert("The ladder didn't help you much. The beast. The beast knocked you down and ate you.");
    } else {
        alert("The" + tool +" helped you see the beast and you were able to run away in time."); 
    }
}
function startGame() {
    var user = prompt("Welcome to my adventure game. Please enter your name:");
    alert("Welcome, " + user + "to my campus adventure. Are you ready? If so, click okay. ");
    tool = prompt("Te begin your adventure, please select a tool: SHOVEL, LADDER, FLASHLIGHT");
    let room = prompt("You walk through the campus center and hear a loud, menacing growl coming from a room around the corner. Do you ENTER or do you LEAVE");

    if(room.toUpperCase()=="LEAVE"){
        leaveRoom();
    } else {
        enterROom();
    }

}