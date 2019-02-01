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

api1().then((JSONdata) => {
  const allBooks = JSONdata.books;
  const arrayJK = [];
  const arraySS = [];
  const insertInArray = (book) => {
    if (book.Author === 'J K Rowling') {
      arrayJK.push(book);
    } else {
      arraySS.push(book);
    }
  };
  const insertRating =  (insertInArray) => {
    allBooks.forEach((book) => {
      getRatings(String(book.id)).then((bookRating) => {
        book['rating'] = bookRating.rating;
        return book;
      }).then((book) => {
        insertInArray(book);
      });
    });
  };
});
