#!/usr/bin/env node

var sendMessage = require('../lib/sendMessage');
sendMessage('2 ' + process.argv.slice(2).join(' '));
