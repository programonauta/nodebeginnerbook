var exec = require("child_process").exec;

exec("find ~", {timeout: 10000, maxBuffer: 200000*1024}, function(err, stdout, stderr) {
   console.log(stdout);
});