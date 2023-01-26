const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  const data = await fs.readFile(FILE_PATH);
  const parsedData = await JSON.parse(data);
  return parsedData;
};

module.exports = {
  readFile,
};