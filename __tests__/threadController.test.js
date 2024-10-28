const request = require('supertest');
const express = require('express');
const app = express();
const threadRoutes = require('../src/routes/threadRoutes');

app.use(express.json());
app.use('/api', threadRoutes);

describe('POST /api/threads', () => {
  it('skapar en ny tråd', async () => {
    const response = await request(app)
    .post('/api/threads')
    .send({
      title: 'Min första tråd',
      content: 'Detta är innehållet i tråden',
      userId: 1
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Min första tråd');
  });
});