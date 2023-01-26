const express = require('express');
const { OK_STATUS } = require('../utils/httpStatuses');
const tokenGenerator = require('../utils/tokenGenerator');

const router = express.Router();

router.post('/login', (_req, res) => {
  const token = tokenGenerator();
  return res.status(OK_STATUS).json({ token });
});

module.exports = router;