
var colors = {
  "0": "gray",
  "1": "red",
  "2": "green",
  "3": "yellow"
}

module.exports = messageParser = function(message) {
  data = message.replace('\n', '');
  parts = message.replace('\n', '').split(' ');

  if (parts[0] === "stop") {
    return { command: "stop" };
  } else {
    return {
      command: "change",
      color: colors[parts[0]],
      message: parts.slice(1).join(' ') || undefined
    }
  }
}
