#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var cwd = path.join(__dirname, '..');
var spawn = require('child_process').spawn;
var script = path.join(__dirname, '..', 'node_modules', 'nodewebkit', 'bin', 'nodewebkit');
var child = spawn('node', [script], {cwd: cwd, detached: true , stdio: 'ignore' });

child.unref();
process.exit();
