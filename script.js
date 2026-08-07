const updates = [

"Admissions Open for 2026-27",

"NBA Accreditation Achieved",

"Campus Placements Started",

"Annual Technical Fest Coming Soon",

"Library Open on Weekends"

];

const button = document.getElementById("showNews");

button.addEventListener("click", function(){

let newsList = document.getElementById("newsList");

newsList.innerHTML = "";

updates.forEach(function(item){

let li = document.createElement("li");

li.textContent = item;

newsList.appendChild(li);

});

});