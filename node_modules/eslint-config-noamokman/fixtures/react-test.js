import React from 'react';
import Lol from './react';
import {expect} from 'chai';

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    const x = <Lol />;

    expect(x.text()).to.equal('lol');
  });
});