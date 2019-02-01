const api1 = require('../../src/externalAPIs/API1');

describe('API 1', () => {
  it('Should retreive all books from url', async () => {
    const JSONObj = await api1();
    expect(JSONObj.books[0].Author).toEqual('J K Rowling');
  });
  it('Should retrive a JSON object', async () => {
    const JSONObj = await api1();
    expect(typeof JSONObj).toEqual(typeof {});
  })
})