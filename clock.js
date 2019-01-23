var fs = require("fs");
var moment  = require("moment");



switch (process.argv[2]) {
  case "set-alarm":
    setAlarm();
    break;
  default:
  console.log(
    "===========================" + "\n" +
    "The current time is " + moment().format("HH:mma") + "\n" +
    "Today's date is " + moment().format("MM-DD-YYYY") + "\n" +
    "==========================="
  )
}


function setAlarm() {

  var alarm = moment(
    process.argv[3] +
    process.argv[4] +
    process.argv[5],
    "MM-DD-YYYY HH:mma");

 fs.writeFile("alarm.js", alarm, (err) => {
   if (err) throw err;
   console.log("The alarm has been set to " + alarm);
 });
}
