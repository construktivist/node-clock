//This is the controller file that manages and exports arguments.
var moment  = require("moment");
var func = require("./functions.js");

//Exports arguments so other files have access to them.
exports.arguments = {
  date: process.argv[3],
  time: process.argv[4],
  meridiem: process.argv[5]
};

//Takes process.argv[2] which acts as a command to determines which function to call. If nothing is passed then it just logs the current time and date.
switch (process.argv[2]) {
  case "set-alarm":
    func.functions.setAlarm();
    break;
    case "alarm":
      func.functions.logAlarm();
      break;
  default:
  console.log(
    "===========================" + "\n" +
    "The current time is " + moment().format("HH:mma") + "\n" +
    "Today's date is " + moment().format("MM-DD-YYYY") + "\n" +
    "==========================="
  );
}
