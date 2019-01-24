var args = require("./clock.js");
var moment  = require("moment");
var fs = require("fs");

exports.functions = {

  setAlarm: function() {
    var alarm = moment(
      args.arguments.date +
      args.arguments.time +
      args.arguments.meridiem,
      "MM-DD-YYYY HH:mma");

   fs.writeFile("alarm.js", alarm, (err) => {
     if (err) throw err;
     console.log("The alarm has been set to " + alarm);
   });
 },

 logAlarm: function() {
   fs.readFile("alarm.js", "utf8", (err, data) => {
     if (err) throw err;
     data = Math.trunc(data / 1000);
     console.log(
       "====================================" + "\n"
       +"Alarm is set to: " +
       moment.unix(data).format("MM-DD-YYYY HH:mm a") + "\n"
     +"====================================");
   });
 }

};
