const { Router } = require('express')
// eslint-disable-next-line no-unused-vars
const { route } = require('express/lib/application')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoas)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router