const api1 = require('./src/externalAPIs/API1');
const api2 = require('./src/externalAPIs/API2');

api1().then((JSONdata) => {
  const allBooks = JSONdata.books;
  const insertRating = () => {
    allBooks.forEach((book) => {
      api2(String(book.id)).then((bookRating) => {
        book['rating'] = bookRating.rating;
        console.log(book);
      });
    });
  };
  insertRating();
});
