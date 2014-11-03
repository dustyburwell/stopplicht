var gui = global.window.nwDispatcher.requireNwGui()
var EventEmitter = require("events").EventEmitter;

var Indicator = function(Notification) {
  var tray = new gui.Tray({ icon: "img/grey.png" });

  tray.menu = new gui.Menu();
  tray.menu.append(new gui.MenuItem({
    label: "About Stopplicht",
    click: this.emit.bind(this, "aboutClicked")
  }))
  tray.menu.append(new gui.MenuItem({
    label: "Quit",
    click: this.emit.bind(this, "quitClicked")
  }));

  this.changeState = function(message) {
    var img = "img/" + message.color + ".png"

    tray.icon = img;

    if (message.title) {
      var options = {};

      options.icon = img;

      if (message.body) {
        options.body = message.body;
      }

      new Notification(message.title, options);
    }
  }
}

Indicator.prototype.__proto__ = EventEmitter.prototype;

module.exports = { Indicator: Indicator };
