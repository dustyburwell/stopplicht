var net = require('net');
var gui = require('nw.gui');

var Indicator = require('./lib/indicator').Indicator;
var View = require('./lib/view').View;

var indicator = new Indicator(Notification);
var tray = indicator.tray;
var proc = {
  exit: function() {
    server.close();
    gui.App.quit();
  }
};
var view = new View(proc, indicator);

var server = net.createServer(function(client) {
  client.setEncoding('ascii');

  client.on('data', function(data) {
    view.onData(data);
    client.end();
  });
});

server.on('error', proc.exit);

indicator.on('quitClicked', view.onQuit);
indicator.on('aboutClicked', view.onAbout);

server.listen(17357);
