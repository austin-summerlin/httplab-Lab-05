/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('GET all from / ', async () => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('/echo, POST status code 200 and plain text with the request body', async () => {
    const res = await request(app)
      .post('/echo')
      .send('hello');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('hello');
  });

  it('GET html with an h1 and the word red', async () => {
    const res = await request(app)
      .get('/red');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('GET html with an h1 and the word green', async () => {
    const res = await request(app)
      .get('/green');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('GET html with an h1 and the word blue', async () => {
    const res = await request(app)
      .get('/blue');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual('<h1>blue</h1>');
  });


});
