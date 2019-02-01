const https = require('https');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';


const httpGet = () => {
  return new Promise((resolve, reject) => {
    https.get(url1, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    });
  });
};

module.exports = httpGet;
