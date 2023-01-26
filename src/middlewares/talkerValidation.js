const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const DATE_REGEX = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

const nameValidator = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.length === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length <= 3) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageValidator = (req, res, next) => {
  const { age } = req.body;
  if (!age || age === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number(age) < 18) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const talkValidator = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const watchedValidator = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (!watchedAt || watchedAt === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!DATE_REGEX.test(watchedAt)) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const ratingCheck = (rating) => {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return true;
  return false;
};
const rateValidator = (req, res, next) => {
  const { rate } = req.body.talk;
  if ((!rate && rate !== 0) || rate === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "rate" é obrigatório' });
    }
    if (ratingCheck(rate)) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
  };

module.exports = {
  nameValidator,
  ageValidator,
  talkValidator,
  watchedValidator,
  rateValidator,
};