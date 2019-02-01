const api2 = require('../../src/externalAPIs/API2');

describe('API 2', () => {
  it('Should return the rating of a particular book with id', async () => {
    const id = String(20);
    const bookrating = await api2(id);
    expect(bookrating.rating).toEqual(4.38);
  });
  it('Should return empty object if id are alphabets', async () => {
    const id = 'abc';
    const bookrating = await api2(id);
    expect(bookrating).toEqual({});
  });
})