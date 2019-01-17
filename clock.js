var moment  = require("moment")

console.log(
  "===========================" + "\n" +
  "The current time is " + moment().format("HH:mma") + "\n" +
  "Today's date is " + moment().format("MM-DD-YYYY") + "\n" +
  "==========================="
)
