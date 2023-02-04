//
// Implementations of the commands
//
log(
  "Welcome to the new online simulated terminal in javascript made me Erik!" +
    "<br>For more information and source code visit my <a href='https://github.com/Ericrulec/javascript-terminal' target='_blank'>GitHub page</a>" +
    "<br><br>Get started by using the 'help' command to list the available commands."
);

register_cmd("help", function (cmd) {
  block_log(
    "List of commands, please refer to the man pages for proper use. (i.e 'man help') "
  );
  registry.forEach(function (value, key, map) {
    block_log("    > " + key);
  });
});

register_cmd("update", function (cmd) {
  var parameters = cmd.split(" ").slice(1);
  console.log(parameters);
  if (parameters.length === 0) {
    block_log("Please Specify value that you would like to update!");
    return;
  }
  let input = parameters[0].toString().toLowerCase();
  if (input === "user") {
    if (parameters.length === 1) {
      block_log(
        "Please Specify title you would like to update the User Title!"
      );
      return;
    }
    update_user_title(parameters[1]);
    block_log(`Successfully Updated User to ${parameters[1]}!`);
    return;
  }
});

register_cmd("clear", function () {
  let log_elems = document.getElementsByClassName("log");
  while (log_elems) {
    log_elems[0].remove();
  }
});

register_cmd("sum", function (cmd) {
  var parameters = cmd.split(" ").slice(1);
  var sum = 0;
  for (var i = 0; i < parameters.length; i++) {
    sum += parseInt(parameters[i]);
  }
  block_log("Sum: " + sum);
});

update_user_title("erik");
