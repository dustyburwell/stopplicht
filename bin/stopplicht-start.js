#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

process.chdir(path.join(__dirname, '/../'))
var spawn = require('child_process').spawn;
var script = path.join(__dirname, '/../node_modules/.bin/nodewebkit');
var child = spawn(script, [], { detached: true , stdio: [ 'ignore', 'ignore', 'ignore' ] });

child.unref();
