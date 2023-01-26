const express = require('express');
const { OK_STATUS } = require('./utils/httpStatuses');
const routers = require('./routers');

const app = express();
app.use(express.json());
app.use(routers);




// não remova esse endpoint, e para o avaliador funcionar
const PORT = '3000';
app.get('/', (_request, response) => {
  response.status(OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
