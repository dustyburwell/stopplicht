#!/usr/bin/env node

var cp = require('child_process')
var args = process.argv.slice(2);

if (!args.length) {
  args.unshift('start');
}

cp.exec('stopplicht-' + args.join(' '), function(err, stdout, stderr) {
  process.stdout.write(stdout);
  process.stderr.write(stderr);
});
