var date = new Date();

let hr = 0;
let min = 0;
let sec = 0;

function runTheclock() {
  var date = new Date();

  secRatio = date.getSeconds() / 60;
  minRaio = (secRatio + date.getMinutes()) / 60;

  hrRatio = (minRaio + date.getHours()) / 12;

  document
    .getElementById("second-hand")
    .style.setProperty("--rotation", secRatio * 360);
  document
    .getElementById("minute-hand")
    .style.setProperty("--rotation", minRaio * 360);
  document
    .getElementById("hour-hand")
    .style.setProperty("--rotation", hrRatio * 360);
}
runTheclock();
setInterval(runTheclock, 1000);

function showTime() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM";

  if (hr == 0) {
    hr = 12;
  }
  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  var time = hr + ":" + min + ":" + sec + " " + session;
  document.getElementById("digitalClock").innerText = time;

  document.getElementById("date").innerText = date;
}
setInterval(showTime, 1000);
showTime();
