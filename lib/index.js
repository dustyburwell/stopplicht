var $ = require('NodObjC')
$.import('Cocoa')
var net = require('net');

var statusMenu;
var tick;
var shouldContinue = true;

var server = net.createServer(function(c) {
  c.setEncoding('ascii');

  c.on('data', function(data) {
    var imageName;

    data = data.replace('\n', '');

    c.end();

    switch (data) {
      case "stop":
        server.close();
        shouldContinue = false;
      case "0":
        imageName = $.NSString('stringWithUTF8String', 'NSStatusNone')
        break;
      case "1":
        imageName = $.NSString('stringWithUTF8String', 'NSStatusUnavailable')
        break;
      case "2":
        imageName = $.NSString('stringWithUTF8String', 'NSStatusAvailable')
        break;
      case "3":
        imageName = $.NSString('stringWithUTF8String', 'NSStatusPartiallyAvailable')
        break;
      default:
        return;
    }

    var image = $.NSImage('imageNamed', imageName);
    statusMenu('setImage', image);
    tick();
  });
});

server.listen(17357, function() {
  var pool = $.NSAutoreleasePool('alloc')('init'),
      app  = $.NSApplication('sharedApplication');

  // set up the app delegate
  var AppDelegate = $.NSObject.extend('AppDelegate')
  AppDelegate.addMethod('applicationDidFinishLaunching:', 'v@:@', function (self, _cmd, notif) {
    var systemStatusBar = $.NSStatusBar('systemStatusBar');
    statusMenu = systemStatusBar('statusItemWithLength', $.NSVariableStatusItemLength);
    statusMenu('retain');
    var title = $.NSString('stringWithUTF8String', "Hello World");

    var imageName = $.NSString('stringWithUTF8String', 'NSStatusNone');
    var image = $.NSImage('imageNamed', imageName);

    statusMenu('setImage', image);
  })
  AppDelegate.register()

  var delegate = AppDelegate('alloc')('init');
  app('setDelegate', delegate);
  app('activateIgnoringOtherApps', true);

  app('finishLaunching');
  var userInfo = $.NSDictionary('dictionaryWithObject', $(1),
                                'forKey', $('NSApplicationLaunchIsDefaultLaunchKey'));
  var notifCenter = $.NSNotificationCenter('defaultCenter');
  notifCenter('postNotificationName', $.NSApplicationDidFinishLaunchingNotification,
              'object', app, 'userInfo', userInfo);
  tick = function () {
    var ev;
    while(ev = app('nextEventMatchingMask', 4294967295,
                   'untilDate', null,
                   'inMode', $.NSDefaultRunLoopMode,
                   'dequeue', 1)) {
      app('sendEvent', ev);
    }
    app('updateWindows');

    if(shouldContinue) {
      setTimeout(tick, 1000);
    }
  }
  tick();

  pool('release');
});
