#!/usr/bin/env node

var cp = require('child_process')
var args = process.argv.slice(2);

var command = args[0] || 'start';

cp.exec('stopplicht-' + command, function(err, stdout, stderr) {
  process.stdout.write(stdout);
  process.stderr.write(stderr);
});
