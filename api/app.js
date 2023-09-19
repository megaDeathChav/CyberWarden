const express = require('express');
const inventoryRoutes = require('./routes/inventory');
const blacklistRoutes = require('./routes/ipManagement');
// const errorHandling = require('./middleware/errorHandling');

const app = express();
app.use(express.json());

// Blah
app.use('/api/v1/inventory', inventoryRoutes);
app.use('/api/v1/ip/management', blacklistRoutes);

// app.use('/resource2', resource2Routes);

// app.use(errorHandling);

module.exports = app;
