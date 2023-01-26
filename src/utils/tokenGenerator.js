const CHAR_NUMBER = 16;
const CHAR_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const tokenGenerator = () => {
  let newToken = '';
  for (let i = 1; i <= CHAR_NUMBER; i += 1) {
    newToken += CHAR_POOL[Math.round(Math.random() * (CHAR_POOL.length - 1))];
  }
  return newToken;
};

module.exports = tokenGenerator;