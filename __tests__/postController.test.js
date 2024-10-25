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

describe('GET /threads/:threadId/posts', () => {
  it('hämtar alla inlägg i en tråd', async () => {
    const response = await request(app).get('/api/threads/1/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('PUT /posts/:id', () => {
  it('Uppdaterar ett inlägg', async() => {
    const response = await request(app)
    .put('/api/posts/1')
    .send({ content: 'Uppdaterat innehåll' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('content', 'Uppdaterat innehåll');
  });
});
