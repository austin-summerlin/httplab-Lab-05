/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it.skip('GET all from / ', async () => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it.skip('/echo, POST status code 200 and plain text with the request body', async () => {
    const res = await request(app)
      .post('/echo')
      .send('hello');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('hello');
  });

  it.skip('GET html with an h1 and the word red', async () => {
    const res = await request(app)
      .get('/red');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it.skip('GET html with an h1 and the word green', async () => {
    const res = await request(app)
      .get('/green');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it.skip('GET html with an h1 and the word blue', async () => {
    const res = await request(app)
      .get('/blue');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>blue</h1>');
  });

  describe('promise route', () => {
    it('reads the contents of the public folder via a promise', async () => {
      const res = await request(app)
        .get('/index.html');

      expect(res.text).toEqual('<h1>hi</hi>');
    });

    it('/index, return 404 not found error', async () => {
      const res = await request(app)
        .get('/index');
      expect(res.text).toEqual('Not Found');
    });
  });

});
