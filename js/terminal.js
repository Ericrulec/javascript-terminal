//   _                                       _
//  ( )_                      _            (_ )
//  |  _)  __  _ __  ___ ___ (_) ___    _ _ | |
//  | |  / __ \  __)  _   _  \ |  _  \/ _  )| |
//  | |_(  ___/ |  | ( ) ( ) | | ( ) | (_| || |
//  \__)\____)_)  (_) (_) (_)_)_) (_)\__ _)___)
//
// Simple terminal implementation in javascript over the web,
// made by Erik with some inspirations from other fake terminals.
//

var terminal_user_title = "user";
function update_user_title(title) {
  terminal_user_title = title;
  document.getElementById("input_title").innerText =
    terminal_user_title + "@void:~$ ";
  //terminal_user_title + pwd +"$";
}

update_user_title(terminal_user_title);

var current_block;

function new_block() {
  var wrapper = document.getElementById("wrapper");
  current_block = document.createElement("div");
  current_block.classList.add("log");
  wrapper.appendChild(current_block);
}

function block_log(message) {
  current_block.innerHTML += "<p>" + message + "</p>";
}

function log(message) {
  var wrapper = document.getElementById("wrapper");
  wrapper.innerHTML += "<div class='log'><p>" + message + "</p></div>";
}

var registry = new Map();
function register_cmd(cmd_name, func) {
  registry.set(cmd_name.toString().toLowerCase(), func);
}

let input_source = document.getElementById("input_source");
input_source.onblur = function () {
  input_source.focus();
};

let keypress = input_source.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (!(event.keyCode === 13)) return;

  var command = document.getElementById("input_source").value;
  var input = command.split(" ")[0].toLowerCase();
  document.getElementById("input_source").value = "";

  new_block();
  if (input != "clear") {
    block_log(terminal_user_title + "@void:~$ " + command);
  }

  if (registry.has(input)) {
    registry.get(input)(command);
  } else {
    block_log(
      `'${input}' is not a registered command, please refer to the 'help' command.`
    );
  }
});
