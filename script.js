var cps = 0;
var inter;
var stopp = 0;
function skree() {
  if (cps == 0) {
    setTimeout(stop, 1000);
  }
  if (stopp == 0) {
    cps = cps + 1;
    document.getElementById("display").innerText = cps;
  }
}
function stop() {
  stopp = 1;
  document.getElementById("display").innerText = parseInt(document.getElementById("display").innerText, 10) + " - Final Score";
  cps = 0;
  setTimeout(restart, 600);
}
function restart() {
  stopp = 0;
}
