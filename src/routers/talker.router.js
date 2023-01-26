const express = require('express');
const { nameValidator, ageValidator, talkValidator,
  watchedValidator, rateValidator } = require('../middlewares/talkerValidation');
const tokenValidator = require('../middlewares/tokenValidation');
const { readFile, writeFile } = require('../utils/fs');
const { OK_STATUS, NOT_FOUND_STATUS, CREATED_STATUS } = require('../utils/httpStatuses');

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

router.post('/talker', tokenValidator, nameValidator, ageValidator,
  talkValidator, watchedValidator, rateValidator, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const oldTalkers = await readFile();
  const newTalker = {
    name,
    age,
    id: oldTalkers.length + 1,
    talk: {
      watchedAt,
      rate,
    },
  };
  const newTalkers = [...oldTalkers, newTalker];
  await writeFile(newTalkers);
  res.status(CREATED_STATUS).json(newTalker);
});

router.put('/talker/:id', tokenValidator, nameValidator, ageValidator,
talkValidator, watchedValidator, rateValidator, async (req, res) => {
const { name, age, talk: { watchedAt, rate } } = req.body;
const { id } = req.params;
const oldTalkers = await readFile();
const talkerIndex = oldTalkers.findIndex((t) => t.id === Number(id));
const newTalker = {
  name,
  age,
  id: Number(id),
  talk: {
    watchedAt,
    rate,
  },
};
oldTalkers.splice(talkerIndex, 1, newTalker);
const newTalkers = [...oldTalkers];
await writeFile(newTalkers);
res.status(OK_STATUS).json(newTalker);
});

module.exports = router;
