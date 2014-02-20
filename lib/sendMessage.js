var net = require('net');

module.exports = sendMessage = function (message) {
  var client = net.connect({port: 17357}, function() {
    client.write(message);
    client.end();
  });
};
