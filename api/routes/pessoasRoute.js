const { Router } = require('express')
// eslint-disable-next-line no-unused-vars
const { route } = require('express/lib/application')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criaPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoas)
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)

module.exports = router