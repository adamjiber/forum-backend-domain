const request = require('supertest');
const express = require('express');
const app = express();
const threadRoutes = require('../src/routes/threadRoutes');

app.use(express.json());
app.use('/api/threads', threadRoutes);

//Test to create new thread
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

//Test to GET all threads
describe('GET /api/threads', () => {
  it('hämtar alla trådar', async () => {
    const response = await request(app).get('/api/threads');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

//PUT test to update thread
describe('PUT /api/threads/:id', () => {
  it('uppdaterar en tråd', async () => {
    const response = await request(app)
    .put('/api/threads/1')
    .send({ title: 'Uppdaterad title', content: 'Uppdaterat innehåll'});
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Uppdaterad title');
  });
});

//DELETE thread
describe('DELETE /api/threads/:id', () => {
  it('raderar en tråd', async () => {
    const response = await request(app).delete('/api/threads/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Thread has been deleted');
  });
});

