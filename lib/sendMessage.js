var net = require('net');

module.exports = sendMessage = function (message) {
  var client = net.connect({port: 17357}, function() {
    client.write(message);
    client.end();
  });

  client.on("error", function() {
    process.stderr.write("Stopplicht is not running. Start it by running `stopplicht`.\n");
  });
};
