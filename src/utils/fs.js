const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  const data = await fs.readFile(FILE_PATH);
  const parsedData = JSON.parse(data);
  return parsedData;
};

const writeFile = async (data) => {
  const newData = JSON.stringify(data);
  await fs.writeFile(FILE_PATH, newData);
};

module.exports = {
  readFile,
  writeFile,
};