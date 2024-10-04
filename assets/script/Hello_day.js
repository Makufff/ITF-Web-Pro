let timeDisplay = document.getElementById("Hello_World");
let Weekday = new Date().toLocaleDateString("en-US", {weekday:'long'});
function refreshTime() {
  let dateString = new Date().toLocaleString("en-US");
  let formattedString = dateString.replace(", ", "<br>");
  timeDisplay.innerHTML = "Hi " + Weekday + " : "+formattedString;
}
setInterval(refreshTime, 1000);
