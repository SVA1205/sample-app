const request = require('supertest');
const app = require('../app');

describe('Sample App API', () => {
  test('GET / returns hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from Sample App!');
    expect(res.body.version).toBe('1.0.0');
  });

  test('GET /health returns UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('UP');
  });

  test('GET /greet/:name returns greeting', async () => {
    const res = await request(app).get('/greet/Swetha');
    expect(res.statusCode).toBe(200);
    expect(res.body.greeting).toBe('Hello, Swetha!');
  });
});
