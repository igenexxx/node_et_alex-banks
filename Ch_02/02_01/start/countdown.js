#!/usr/bin/env node

const parseArgs = require('minimist');
//
// Collect the time from argv
//
const { time } = parseArgs(process.argv);

if (!time) {
  throw new Error('--time is required');
}

if (!parseInt(time)) {
  throw new Error('--time must be a number');
}

console.log(time);
//
// Print stars in-line
//

//
// Run a timer and remove stars
//
