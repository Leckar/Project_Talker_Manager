const express = require('express');
const { emailValidation, pwdValidation } = require('../middlewares/loginValidation');
const { OK_STATUS } = require('../utils/httpStatuses');
const tokenGenerator = require('../utils/tokenGenerator');

const router = express.Router();

router.post('/login', emailValidation, pwdValidation, (_req, res) => {
  const token = tokenGenerator();
  return res.status(OK_STATUS).json({ token });
});

module.exports = router;