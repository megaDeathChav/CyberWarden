const express = require('express');
const router = express.Router();

let blacklist = [];
let whitelist = [];

router.post('/blacklist/get', (req, res, next) => {
  res.json({ ping: 'pong' });
});

router.get('/blacklist/add', (req, res, next) => {
  res.json({ ping: 'pong' });
});

router.post('/whitelist/get', (req, res, next) => {
  res.json({ ping: 'pong' });
});

router.get('/whitelist/add', (req, res, next) => {
  res.json({ ping: 'pong' });
});

module.exports = router;
