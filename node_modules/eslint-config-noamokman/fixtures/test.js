import calc from './es6';

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    calc({a: 1, b: 2});
  });
});