const express = require('express');

const routes = express.Router();

router.get('/pets', (req, res) => res.send('Lista de pets'));
router.get('/pets/:id', (req, res) =>
  res.send('Detalhes do pet: ' + req.params.id),
);
router.post('/pets', (req, res) => res.send('Cadastro de pet'));
router.put('/pets/:id', (req, res) =>
  res.send('Atualização de pet: ' + req.params.id),
);
router.delete('/pets/:id', (req, res) =>
  res.send('Exclusão de pet:' + req.params.id),
);

/*
URL base: http://localhost:3000
GET - /pets -Listar todos pets
GET - /pets/:id - Listar um pet por id 
POST - /pets - criar um pet
PUT - /pets/:id - atualizar um pet por id(/pets/1)
Delete - /pets/:id - Deletar um pet por id(/pets/1)
URI <=> endpoints
*/

module.exports = router;
