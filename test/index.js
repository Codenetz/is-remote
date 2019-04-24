import { expect } from 'chai';
import isRemote from '../src/index';

const localFile = 'bar.png';
const remoteFile = 'https://raw.githubusercontent.com/Codenetz/is-remote/master/test/bar.png';

describe('#remote', () => {
  it('should return false', () => {
    expect(isRemote('bar.png')).to.equal(false);
  });
});
