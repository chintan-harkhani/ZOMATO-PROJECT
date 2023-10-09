const CronJob = require("cron").CronJob;

// it  is runnig  on every  3 secound;
new CronJob (
      "*/5 * * * * * ",
      function(){
          console.log("It Is Cron Js Running On Every 5 Secound.....!");
      },
      null,
      false,
      "Asia/Kolkata"
).start();
