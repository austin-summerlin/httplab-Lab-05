const request = require('supertest');
const promises = require('../promises.js');

describe('promise route', () => {
  it.only('reads the contents of the public folder via a promise', async () => {
    const res = await request(promises)
      .get('index.html');

    expect(res.text).toEqual('<h1>HELLLLLLOOOOOOOO</h1>');
  });
});

