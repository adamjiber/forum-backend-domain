const express = require('express');
const dotenv = require('dotenv');
const threadRoutes = require('./routes/threadRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();

// Middleware to read json
app.use(express.json());

//Connect routes
app.use('/api', threadRoutes);

//Connect postRoutes
app.use('/api', postRoutes);

// Test routes
app.get('/', (req, res) => {
  res.send('Forum Backend - Domain')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

