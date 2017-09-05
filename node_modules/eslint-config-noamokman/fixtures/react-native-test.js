import React from 'react';
import {Text} from 'react-native';
import {expect} from 'chai';

describe('test', function () {
  this.timeout(5000);

  it('case', () => {
    const x = <Text>{'lol'}</Text>;

    expect(x.text()).to.equal('lol');
  });
});