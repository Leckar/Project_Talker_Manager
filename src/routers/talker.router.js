const express = require('express');
const { readFile } = require('../utils/fs');
const { OK_STATUS, NOT_FOUND_STATUS } = require('../utils/httpStatuses');

const router = express.Router();

router.get('/talker', async (_req, res) => {
  const talkers = await readFile();
  return res.status(OK_STATUS).json(talkers);
});

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();
  const targetTalker = talkers.find((t) => t.id === Number(id));
  if (!targetTalker) {
    return res.status(NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(OK_STATUS).json(targetTalker);
});

module.exports = router;
