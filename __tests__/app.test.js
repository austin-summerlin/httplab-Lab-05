const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('getl all from / ', async () => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });


});
