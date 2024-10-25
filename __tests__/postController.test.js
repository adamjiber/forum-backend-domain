const request = require('supertest');
const express = require('express');
const app = express();
const postRoutes = require('../src/routes/postRoutes');  // Importera dina routes

app.use(express.json()); // Middleware för att läsa JSON
app.use('/api', postRoutes);  // Använd dina routes i testappen

describe('POST /threads/:threadId/posts', () => {
  it('skapar ett nytt inlägg i en tråd', async () => {
    const response = await request(app)
      .post('/api/threads/1/posts')
      .send({
        content: 'Detta är ett testinlägg',
        userId: 1
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('content', 'Detta är ett testinlägg');
  });
});
