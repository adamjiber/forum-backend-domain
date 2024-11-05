const express = require('express');
const dotenv = require('dotenv');
const passport = require('../config/passport')
const threadRoutes = require('./routes/threadRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
const app = express();

// Middleware to read json
app.use(express.json());

//Initiera passport
app.use(passport.initialize());

//Connect routes
app.use('/api/threads', threadRoutes);

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

console.log('REQUIRE_AUTH:', process.env.REQUIRE_AUTH);
