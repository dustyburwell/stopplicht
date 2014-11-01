#!/usr/bin/env node

var sendMessage = require('../lib/sendMessage');
sendMessage('0 ' + process.argv.slice(2).join(' '));
