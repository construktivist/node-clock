var moment  = require("moment");
var func = require("./functions.js");

exports.arguments = {
  date: process.argv[3],
  time: process.argv[4],
  meridiem: process.argv[5]
};

console.log(process.argv);
console.log(arguments.time);


switch (process.argv[2]) {
  case "set-alarm":
    func.functions.setAlarm();
    console.log("Switch set-alarm");
    break;
  default:
  console.log(
    "===========================" + "\n" +
    "The current time is " + moment().format("HH:mma") + "\n" +
    "Today's date is " + moment().format("MM-DD-YYYY") + "\n" +
    "==========================="
  );
}
