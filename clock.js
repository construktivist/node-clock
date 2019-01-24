var moment  = require("moment");
var func = require("./functions.js");

exports.arguments = {
  date: process.argv[3],
  time: process.argv[4],
  meridiem: process.argv[5]
};


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
