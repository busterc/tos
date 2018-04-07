#!/usr/bin/env node
'use strict';

var tos = require('./');

var markup = 'jade';
var company = process.argv[2];
var state = process.argv[3];

if (company && company.match(/-h|--html/)) {
  markup = 'html';
  company = state;
  state = process.argv[4];
}

if (!company || !state) {
  console.log(
    [
      '\n  Usage: tos [options] <company> <state>',
      '\n\n    Terms of Service and Privacy Policy Generator.',
      '\n\n  Options:',
      '\n\n    -h, --html  outputs as HTML\n'
    ].join('')
  );

  process.exit(1);
}

tos(
  {
    markup: markup,
    company: company,
    state: state
  },
  (error, response) => {
    if (error) {
      throw error;
    }
    console.log(response);
  }
);
