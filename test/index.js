import assert from 'assert';
import tos from '../lib';

describe('tos', function () {
  it('should return as Jade', function (done) {
    this.timeout(5000);
    tos({
      company: 'Hiya, Inc.',
      state: 'Texas'
    }, (error, response) => {
      if (error) {
        return assert(false, error.message);
      }
      if (response.indexOf('h2') === 0) {
        assert(true);
        return done();
      }
      assert(false);
      done();
    });
  });

  it('should return as HTML', function (done) {
    this.timeout(5000);
    tos({
      markup: 'html',
      company: 'Hiya, Inc.',
      state: 'Texas'
    }, (error, response) => {
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
    });
  });

  it('should fail without a company', function (done) {
    this.timeout(5000);
    tos({
      state: 'Texas'
    }, (error) => {
      if (error) {
        done();
        return assert(true, error.message);
      }
      assert(false);
      done();
    });
  });

  it('should fail without a state', function (done) {
    this.timeout(5000);
    tos({
      company: 'Hiya, Inc.'
    }, (error) => {
      if (error) {
        done();
        return assert(true, error.message);
      }
      assert(false);
      done();
    });
  });
});
