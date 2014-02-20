#!/usr/bin/env node

var fs = require('fs');

var spawn = require('child_process').spawn;
var script = __dirname + '/../lib/index.js';
var child = spawn('node', [script], { detached: true , stdio: [ 'ignore', 'ignore', 'ignore' ] });

child.unref();
