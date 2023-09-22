const express = require('express');
const router = express.Router();
const port = 3000;

let blacklist = [];
let whitelist = [];

router.get('/blacklist/get', (req, res, next) => {
  //this is for debugging
  console.log('GET /blacklist/get route reached');
  res.json({ blacklist });

});

router.post('/blacklist/add', (req, res, next) => {
  const { ipAddress } = req.body;

  blacklist.push(ipAddress);
//this is for debugging
  res.status(201).json({ message: 'IP address added to blacklist successfully' });
});

router.get('/whitelist/get', (req, res, next) => {
  res.json({ whitelist });
});

router.post('/whitelist/add', (req, res, next) => {
  const { ipAddress } = req.body;

  whitelist.push(ipAddress);
//this is for debugging
  res.status(201).json({ message: 'IP address added to whitelist successfully' });
});

module.exports = router;