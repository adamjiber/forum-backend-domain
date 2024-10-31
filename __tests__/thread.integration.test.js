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

describe('POST /api/threads', () => {
  it('skapar en ny tråd och kontrollerar Content-Type och Location-header', async () => {
    const response = await request(app)
    .post('/api/threads')
    .send({
      title: 'Test-tråd',
      content: 'Innehåll för test-tråden',
      userId: 1
    });
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('title', 'Test-tråd');
  });
});

describe('PUT /api/threads/:id', () => {
  it('Uppdaterar en tråd och kontrollerar Content-Type', async () => {
    //Skapar en ny tråd att uppdatera
    const newThread = await request(app)
    .post('/api/threads')
    .send({
      title: 'Gamla titeln',
      content: 'Gammalt innehåll',
      userId: 1
    });
//Uppdaterar tråden
const response = await request(app)
.put(`/api/threads/${newThread.body.id}`)
.send({
  title: 'Uppdaterad title',
  content: 'Uppdaterat innehåll'
});

console.log(response.body);

expect(response.status).toBe(200);
expect(response.headers['content-type']).toMatch(/json/);
expect(response.body).toHaveProperty('title', 'Uppdaterad title');
expect(response.body.content).toHaveProperty('content', 'Uppdaterat innehåll');

  });
});