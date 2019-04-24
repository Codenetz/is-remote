import http from 'http';
import https from 'https';

export default (path, validStatusCodes = [200]) => {
  return new Promise(resolve => {
    if (!path.startsWith('http')) return resolve(false);
    try {
      const protocol = path.startsWith('https') ? https : http;
      let req = protocol.request(new URL(path), res => {
        return resolve(validStatusCodes.indexOf(res.statusCode) >= 0);
      });
      req.end();
    } catch (e) {
      return resolve(false);
    }
  });
};
