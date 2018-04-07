var assert = require('assert');
var tos = require('../index.js');

describe('tos', function() {
  it(
    'should return as Jade',
    function(done) {
      tos(
        {
          company: 'Hiya, Inc.',
          state: 'Texas'
        },
        (error, response) => {
          if (error) {
            return assert(false, error.message);
          }
          if (response.indexOf('h2') === 0) {
            assert(true);
            return done();
          }
          assert(false);
          done();
        }
      );
    },
    5000
  );

  it(
    'should return as HTML',
    function(done) {
      tos(
        {
          markup: 'html',
          company: 'Hiya, Inc.',
          state: 'Texas'
        },
        (error, response) => {
          if (error) {
            done();
            return assert(false, error.message);
          }
          if (response.indexOf('<h2>') === 0) {
            assert(true);
            return done();
          }
          assert(false);
          done();
        }
      );
    },
    5000
  );

  it(
    'should fail without a company',
    function(done) {
      tos(
        {
          state: 'Texas'
        },
        error => {
          if (error) {
            done();
            return assert(true, error.message);
          }
          assert(false);
          done();
        }
      );
    },
    5000
  );

  it(
    'should fail without a state',
    function(done) {
      tos(
        {
          company: 'Hiya, Inc.'
        },
        error => {
          if (error) {
            done();
            return assert(true, error.message);
          }
          assert(false);
          done();
        }
      );
    },
    5000
  );
});
