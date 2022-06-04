const { Router } = require('express')
// eslint-disable-next-line no-unused-vars
const { route } = require('express/lib/application')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
  .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

module.exports = router