var fs = require("fs");
var moment  = require("moment");

console.log(
  "===========================" + "\n" +
  "The current time is " + moment().format("HH:mma") + "\n" +
  "Today's date is " + moment().format("MM-DD-YYYY") + "\n" +
  "==========================="
)

var time = moment(process.argv[2]);

function setAlarm(time) {
 fs.writeFile("alarm.js", time, (err) => {
   if (err) throw err;
   console.log("Alarm has been set.");
 });
}

setAlarm(time);
