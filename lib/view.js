var gui = global.window.nwDispatcher.requireNwGui()
var messageParser = require('./messageParser');

var View = function(proc, indicator) {
  this.onData = function(data) {
    var message = messageParser(data);

    switch (message.command) {
      case "stop":
        proc.exit();
        break;
      case "change":
        indicator.changeState(message);
        break;
    }
  }

  this.onQuit = function() {
    proc.exit();
  }

  this.onAbout = function() {
    gui.Window.open('about.html', {
      title: 'About Stopplicht',
      toolbar: false,
      position: 'center',
      width: 400,
      height: 300
    });
  }
}

module.exports = { View: View };
