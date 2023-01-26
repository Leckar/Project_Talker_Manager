const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  const data = await fs.readFile(FILE_PATH);
  const parsed = await JSON.parse(data);
  return parsed;
};

module.exports = {
  readFile,
};