
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
    var wholeMessage = parts.slice(1).join(" ");
    var lines = wholeMessage.split("^")
                            .map(function(l) { return l.trim(); });

    var title = (lines[0] || "");
    var body = (lines.slice(1).join("\n") || "");

    return {
      command: "change",
      color: colors[parts[0]],
      title: title || undefined,
      body: body || undefined
    }
  }
}
