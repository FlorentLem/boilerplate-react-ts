const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello boilerplate!' });
});

module.exports = router;
