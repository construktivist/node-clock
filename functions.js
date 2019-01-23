var args = require("./clock.js");
var moment  = require("moment");
var fs = require("fs");

exports.functions = {
  setAlarm: function() {
    console.log("setAlarm");
    var alarm = moment(
      args.arguments.date +
      args.arguments.time +
      args.arguments.meridiem,
      "MM-DD-YYYY HH:mma");

   fs.writeFile("alarm.js", alarm, (err) => {
     if (err) throw err;
     console.log("The alarm has been set to " + alarm);
   });
  }
}
