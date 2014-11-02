var gui = global.window.nwDispatcher.requireNwGui()
var cp = require('child_process');
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
    gui.Window.open('http://www.dustyburwell.com/stopplicht/', {toolbar: false});
  }
}

module.exports = { View: View };
