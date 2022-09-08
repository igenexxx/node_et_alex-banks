#!/usr/bin/env node

const parseArgs = require('minimist');
const { stdout: log } = require('single-line-log');
const Timer = require('tiny-timer');

const { time } = parseArgs(process.argv);
const SECOND = 1000;
const timer = new Timer({ interval: SECOND });

if (!time) {
  throw new Error('--time is required');
}

let count = parseInt(time, 10);

if (!count) {
  throw new Error('--time must be a number');
}

const message = '*'.repeat(count);


timer.on('tick', () => {
  log(message.slice(0, count--));
});

timer.start(count * SECOND);
