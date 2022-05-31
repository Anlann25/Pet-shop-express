const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

//Mostra a página inicial dos pets
router.get('/adm/pets', petController.index);

//Mostra a página para cadastrar um novo pet
router.get('/adm/pets/cadastro', petController.create);

//Envia as informações da página do pet para salvar no banco de dados
router.post('/adm/pets', petController.store);

//Mostra a página de detalhes de um pet
router.get('/adm/pets/:id', petController.show);

//Mostra a página para atualizar dados de um pet
router.get('/adm/pets/:id/editar', petController.edit);

//Atualiza os dados do pet selecionado no banco de dados
router.put('/adm/pets/:id', petController.update);

//Deleta um pet do banco de dados
router.delete('/adm/pets/:id', petController.destroy);

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
