const express = require('express');
const { readFile } = require('../utils/fs');
const { OK_STATUS } = require('../utils/httpStatuses');

const router = express.Router();

router.get('/talker', async (_req, res) => {
  const talkers = await readFile;
  res.status(OK_STATUS).json(talkers);
});

module.exports = router;
