const request = require('request');

const API1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';

let dataReceived;

const getData = () => {
  request(API1, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    dataReceived = body;
    console.log(dataReceived);
  });
};
getData();
