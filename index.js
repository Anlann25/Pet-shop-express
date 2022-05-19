const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');

app.use(petsRouter);

app.get('/', (req, res) => {
  res.send('ola ');
});

app.listen(3000, () => console.log('rodando...'));
