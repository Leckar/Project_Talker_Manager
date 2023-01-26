const { BAD_REQUEST_STATUS } = require('../utils/httpStatuses');

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email || email === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const pwdValidation = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(BAD_REQUEST_STATUS)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  emailValidation,
  pwdValidation,
};