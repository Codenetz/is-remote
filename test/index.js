import { expect } from 'chai';
import isRemote from '../src/index';

describe('#remote', () => {
  it('should return false', () => {
    expect(isRemote('bar.png')).to.equal(false);
  });
});
