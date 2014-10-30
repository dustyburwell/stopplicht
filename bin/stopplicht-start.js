#!/usr/bin/env node

var fs = require('fs');

var spawn = require('child_process').spawn;
var script = __dirname + '/../node_modules/.bin/nodewebkit';
var child = spawn(script, [], { detached: true , stdio: [ 'ignore', 'ignore', 'ignore' ] });

child.unref();
