const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware för att läsa in json
app.use(express.json());

//Import routes
const threadRoutes = require('./routes/threadRoutes');
app.use('/api', threadRoutes);

// Test routes
app.get('/', (req, res) => {
  res.send('Forum Backend - Domain')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

