const https = require('https');

const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';


const getRatings = (id) => {
  return new Promise((resolve, reject) => {
    https.get(url2 + id, (res) => {
      res.setEncoding('utf8');
      let rating;
      res.on('data', (data) => { rating = data; });
      res.on('end', () => {
        const parsedData = JSON.parse(rating);
        resolve(parsedData);
      });
    });
  });
};

module.exports = getRatings;
