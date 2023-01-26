const { UNAUTHORIZED_STATUS } = require('../utils/httpStatuses');

const tokenValidator = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(UNAUTHORIZED_STATUS)
      .json({ message: 'Token não encontrado' });
  }
  if (token.length !== 16 || typeof token !== 'string') {
    return res.status(UNAUTHORIZED_STATUS)
      .json({ message: 'Token inválido' });
  }
  next();
};

module.exports = tokenValidator;