register_cmd("man", function (cmd) {
  var parameters = cmd.split(" ").slice(1);
  console.log(parameters);
  switch (parameters[0]) {
    case "help": {
      block_log("The 'help' command lists the available commands.");
      block_log("Usage: $ help");
      break;
    }
    case "update": {
      block_log(
        "The 'update' command is used to update the user name.<br>Usage: $ update user [NEW_USERNAME]"
      );
      break;
    }
    case "clear": {
      block_log(
        "The 'clear' command is used to clear the screen.<br>Usage: $ clear"
      );
      break;
    }
    default: {
      block_log(`The manual page for '${parameters[0]}' is not available.`);
      break;
    }
  }
});
