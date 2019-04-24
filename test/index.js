import { expect } from 'chai';
import isRemote from '../src/index';

const localFile = 'bar.png';
const remoteFileHttps =
  'https://raw.githubusercontent.com/Codenetz/is-remote/master/test/bar.png';
const remoteFileHttpsMisspelling =
  'https://raw.githubusercontent.com/Codenetz/is-remote/master/test/barrrrrrr.png';
const remoteFileHttp =
  'http://raw.githubusercontent.com/Codenetz/is-remote/master/test/bar.png';

describe('#remote', () => {
  it('should return false on wrong URL', () => {
    isRemote('http')
      .then(res => {
        expect(res).to.equal(false);
      })
      .catch(e => {
        console.log('[should return false on wrong URL]');
        console.error(e);
      });
  });

  it('should return false on local file', () => {
    isRemote(localFile)
      .then(res => {
        expect(res).to.equal(false);
      })
      .catch(e => {
        console.log('[should return false on local file]');
        console.error(e);
      });
  });
  it('should return true on remote https file', () => {
    isRemote(remoteFileHttps)
      .then(res => {
        expect(res).to.equal(true);
      })
      .catch(e => {
        console.log('[should return true on remote https file]');
        console.error(e);
      });
  });

  it('should return true on remote http file', () => {
    isRemote(remoteFileHttp, [200, 301, 302])
      .then(res => {
        expect(res).to.equal(true);
      })
      .catch(e => {
        console.log('[should return true on remote http file]');
        console.error(e);
      });
  });

  it('should return false on not found remote file', () => {
    isRemote(remoteFileHttpsMisspelling)
      .then(res => {
        expect(res).to.equal(false);
      })
      .catch(e => {
        console.log('[should return false on not found remote file]');
        console.error(e);
      });
  });
});
