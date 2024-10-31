const request = require('supertest');
const express = require('express');
const app = express();
const threadRoutes = require('../src/routes/threadRoutes');
const postRoutes = require('../src/routes/postRoutes');

app.use(express.json());
app.use('/api/threads', threadRoutes);
app.use('/api/threads/:threadId/posts', postRoutes);

//Test to controll GET request for headers
describe('GET /api/threads', () => {
  it('kontrollerar att Content-Type ör application/json', async () => {
    const response = await request(app).get('/api/threads');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
});