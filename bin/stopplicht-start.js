#!/usr/bin/env node

var cp = require('child_process');
var fs = require('fs');
var path = require('path');
var cwd = path.join(__dirname, '..');
var script = path.join(__dirname, '..', 'node_modules', 'nodewebkit', 'bin', 'nodewebkit');
var child = cp.spawn('node', [script], {cwd: cwd, detached: true , stdio: 'ignore' });

child.unref();
process.exit();
