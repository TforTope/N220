console.log("here");
const Fall = {
  season: "Fall",
  months: ["September", "October", "November"],
  drink: favDrink(),
  food: "Pumpkin Pie",
  favSeason: true,
  holidays: ["Labor Day", "Veteran's Day", "Halloween", "Thanksgiving"],
  seasonNum: 3,
};
function favDrink() {
  let drinks = ["Apple Cider", "Pumpkin Spice Drinks", "Hot Chocolate"];
  let todayDrink = drinks[Math.floor(Math.random() * drinks.length)];
  return todayDrink;
}
document.getElementsByTagName("h1")[0].innerText = Fall.season;
document.getElementsByTagName("h2")[0].innerText = Fall.season + " Holidays";
document.getElementsByTagName("h2")[1].innerText = Fall.season + " Favorites";
document.getElementsByTagName("h2")[2].innerText = Fall.season + " Notes";

let holItem="";
for (hol of Fall.holidays) {
  holItem += "<li>" + hol + "</li>";
}
document.getElementsByTagName("ul")[0].innerHTML = holItem;
document.getElementsByClassName("foodDrink")[0].innerText =
  Fall.drink+ " and " + Fall.food;
function fallCount(num) {
  if (Fall.months.length === num) {
    console.log("Fall is " + num / 12 + " of the calendar year.");
  }
}
fallCount(Fall.favSeason);

if (Fall.favSeason) {
  document.querySelector("p:not(.foodDrink)").innerText =
    "Fall is also my favorite season!";
} else {
  document.querySelectorAll("p:not(.foodDrink)")[0].innerText =
    "If Fall isn't your favorite season, which season do you prefer?";
}
